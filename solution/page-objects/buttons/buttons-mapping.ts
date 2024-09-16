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
        this.findLocationBtn = this.page.getByTestId("position");
        this.tallAndFatBtn = this.page.getByTestId("property");
        this.colorBtn = this.page.getByTestId("color");
        this.disabledBtn = this.page.locator("button[id='isDisabled'][title='Disabled button']");
        this.buttonHold = this.page.locator("button[id='isDisabled'][class*='is-primary']");

    }
}