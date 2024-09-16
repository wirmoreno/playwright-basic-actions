import type { Locator, Page } from "@playwright/test";

export class SimpleTablePageMapping {
    public readonly page: Page;
    public readonly shoppingListTable: Locator;
    public readonly simpleTable: Locator;
    public readonly sortTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shoppingListTable = this.page.getByTestId("shopping");
        this.simpleTable = this.page.getByTestId("simpletable");
        this.sortTable = this.page.locator("table[matsort]");
    }
}