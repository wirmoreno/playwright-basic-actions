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
        this.appendTextNPressTab = this.page.getByTestId("join");
        this.whatIsInsideTheTextBox = this.page.getByTestId("getMe");
        this.clearText = this.page.getByTestId("clearMe");
        this.disabled = this.page.getByTestId("noEdit");
        this.readOnly = this.page.getByTestId("dontwrite");
    }
}