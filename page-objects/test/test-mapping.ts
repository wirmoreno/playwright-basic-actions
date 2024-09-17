import type { Locator, Page } from "@playwright/test";

export class TestPageMapping {
    public readonly page: Page;
    public readonly inputCard: Locator;
    public readonly buttonsCard: Locator;
    public readonly selectCard: Locator;
    public readonly dragCard: Locator;
    public readonly multiSelectionCard: Locator;
    public readonly tablesCard: Locator;
    public readonly advancedTablesCard: Locator;
    public readonly radioCard: Locator;
    public readonly form: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputCard = this.page.locator("a[href='/edit']");
        this.buttonsCard = this.page.locator("a[href='/buttons']");
        this.selectCard = this.page.locator("a[href='/dropdowns']");
        this.dragCard = this.page.locator("a[href='/draggable']");
        this.multiSelectionCard = this.page.locator("a[href='/selectable']");
        this.tablesCard = this.page.locator("a[href='/table']");
        this.advancedTablesCard = this.page.locator("a[href='/advancedtable']");
        this.radioCard = this.page.locator("a[href='/radio']");
        this.form = this.page.locator("a[href='/forms']");
    }
}