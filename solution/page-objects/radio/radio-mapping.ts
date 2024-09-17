import type { Locator, Page } from "@playwright/test";

export class RadioPageMapping {
    public readonly page: Page;
    public readonly selectAnyOne: Locator;
    public readonly acceptTermsNConditions: Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectAnyOne = this.page.locator("[class='field']", { hasText: "Select any one" });
        this.acceptTermsNConditions = this.page.locator("[class='field']", { hasText: "Accept the T&C" });
    }
}