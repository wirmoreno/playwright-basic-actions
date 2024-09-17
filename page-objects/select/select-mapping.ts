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
        this.selectFruit = '';
        this.selectionSubtitle = '';
        this.selectSuperheros = '';
        this.selectLanguage = '';
        this.selectCountry = '';

    }
}