import { Page } from "@playwright/test";

export class BasePage {
    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Go to the app website
     */
    async openApplication() {
        await this.page.goto("https://letcode.in/test");
    }
}