import type { Locator, Page } from "@playwright/test";

export class SelectPageMapping {
    public readonly page: Page;
    public readonly selectFruit: Locator;
    public readonly selectionSubtitle: Locator;
    public readonly selectSuperheros: Locator;
    public readonly selectLanguage: Locator;
    public readonly selectCountry: Locator;


    constructor(page: Page) {
        this.page = page;
        this.selectFruit = this.page.getByTestId("fruits");
        this.selectionSubtitle = this.page.locator("p[class='subtitle']");
        this.selectSuperheros = this.page.getByTestId("superheros");
        this.selectLanguage = this.page.getByTestId("lang");
        this.selectCountry = this.page.getByTestId("country");

    }
}