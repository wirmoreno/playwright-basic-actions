import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { ButtonsPageMapping } from "./buttons-mapping"

export class ButtonsPage extends BasePage {
    public readonly page: Page;
    public mapping: ButtonsPageMapping

    public constructor(page: Page) {
        super(page);
        this.page = page;
        this.mapping = new ButtonsPageMapping(page);
    }
}