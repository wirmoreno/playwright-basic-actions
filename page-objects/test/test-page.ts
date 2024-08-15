import { Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { TestPageMapping } from "./test-mapping";

export class TestPage extends BasePage {
    public readonly page: Page;
    public mapping: TestPageMapping

    public constructor(page: Page) {
        super(page)
        this.page = page;
        this.mapping = new TestPageMapping(page);
    }

    async openInputCard() {
        await this.mapping.inputCard.click();
    }

    async openButtonCard() {
        await this.mapping.buttonsCard.click();
    }

    async openSelectCard() {
        await this.mapping.selectCard.click();
    }

    async openDragCard() {
        await this.mapping.dragCard.click();
    }

    async openMultiSelectCard() {
        await this.mapping.multiSelectionCard.click();
    }

    async openTablesCard() {
        await this.mapping.tablesCard.click();
    }

    async openAdvancedTablesCard() {
        await this.mapping.advancedTablesCard.click();
    }
}