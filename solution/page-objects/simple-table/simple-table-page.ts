import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { SimpleTablePageMapping } from "./simple-table-mapping"

export class SimpleTablePage extends BasePage {
    public readonly page: Page;
    public mapping: SimpleTablePageMapping

    public constructor(page: Page) {
        super(page);
        this.page = page;
        this.mapping = new SimpleTablePageMapping(page);
    }

    async checkShoppingList() {
        let prices: number[] = [];
        let pricesSum = 0;
        let expectedTotal = await this.mapping.shoppingListTable.locator("tfoot td").nth(1).textContent();

        let index = 0;
        for await (const row of await this.mapping.shoppingListTable.locator("tr").all()) {
            let rowText = (await row.innerText()).trim().split("\t");
            let price = parseInt(rowText[1]);

            if (index === 0) {
                index++;
                continue
            }

            prices.push(price);
            index++;
        }

        pricesSum = prices.reduce((p1, p2) => p1 + p2, 0);

        if (expectedTotal) {
            expect(pricesSum).toBe(parseInt(expectedTotal));
        }
        else {
            throw new Error("Something went wrong while trying to get the total price from the shopping list table");
        }
    }

    async markGivenNameAsPresent(name: string) {
        await this.mapping.simpleTable.locator("tbody tr").filter({ hasText: name }).locator("input").click();
        expect(this.mapping.simpleTable.locator("tbody tr").filter({ hasText: name }).locator("input")).toBeChecked();
    }

    async checkTableSortingBy(sortBy: string, tabColumn: number, contentType: string) {
        const supportedSortBy = ["name", "calories", "fat", "carbs", "protein", "cholesterol"];
        const supportedContentType = ["string", "number"];

        if (!supportedSortBy.includes(sortBy.toLowerCase())) {
            throw new Error(`The sort by method ${sortBy} is not supported. Please, double check it`);
        }

        if (!supportedContentType.includes(contentType.toLowerCase())) {
            throw new Error(`The sort by method ${sortBy} is not supported. Please, double check it`);
        }

        let columns: string[] = [];
        await this.mapping.sortTable.locator(`[mat-sort-header=${sortBy}]`).click();

        let index = 0;
        for await (const row of await this.mapping.sortTable.locator("tr").all()) {
            let rowText = (await row.innerText()).trim().split("\t");
            let number = rowText[tabColumn].trim();

            columns.push(number);
            index++;
        }

        if (contentType === "string") {
            expect.soft(await this.isStringArraySorted(columns)).toBeTruthy();
        }
        else {
            expect.soft(await this.isNumberArraySorted(columns)).toBeTruthy();
        }
    }

    async isStringArraySorted(array) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i].localeCompare(array[i + 1]) > 0 && array[i] != array[i + 1]) {
                return false;
            }
        }
        return true;
    }
    async isNumberArraySorted(array) {
        for (let i = 0; i < array.length - 1; i++) {
            if (Number(array[i]) > Number(array[i + 1])) {
                return false;
            }
        }
        return true;
    }
}