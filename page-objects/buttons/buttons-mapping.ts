import type { Locator, Page } from "@playwright/test";

export class ButtonsPageMapping {
    public readonly page: Page;
    public readonly goToHomeBtn: Locator;
    public readonly findLocationBtn: Locator;
    public readonly tallAndFatBtn: Locator;
    public readonly colorBtn: Locator;
    public readonly disabledBtn: Locator;
    public readonly buttonHold: Locator;


    constructor(page: Page) {
        this.page = page;
        this.goToHomeBtn = this.page.getByTestId("home");
        this.findLocationBtn = '';
        this.tallAndFatBtn = '';
        this.colorBtn = '';
        this.disabledBtn = '';
        this.buttonHold = '';
    }
}