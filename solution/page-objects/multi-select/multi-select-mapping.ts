import type { Locator, Page } from "@playwright/test";

export class MultiSelectPageMapping {
    public readonly page: Page;
    public readonly selectableList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectableList = this.page.getByTestId("selectable");
    }
}