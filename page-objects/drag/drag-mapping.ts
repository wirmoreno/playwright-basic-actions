import type { Locator, Page } from "@playwright/test";

export class DragPageMapping {
    public readonly page: Page;
    public readonly sampleBox: Locator;
    public readonly mainBox: Locator;



    constructor(page: Page) {
        this.page = page;
        this.sampleBox = this.page.getByTestId("sample-box");
        this.mainBox = this.page.locator("div[class='example-boundary']");


    }
}