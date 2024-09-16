import type { Locator, Page } from "@playwright/test";

export class InputPageMapping {
    public readonly page: Page;
    public readonly fullName: Locator;
    public readonly appendTextNPressTab: Locator;
    public readonly whatIsInsideTheTextBox: Locator;
    public readonly clearText: Locator;
    public readonly disabled: Locator;
    public readonly readOnly: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullName = this.page.getByTestId("fullName");
        this.appendTextNPressTab = '';
        this.whatIsInsideTheTextBox = '';
        this.clearText = '';
        this.disabled = '';
        this.readOnly = '';
    }
}