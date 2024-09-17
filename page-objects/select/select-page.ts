import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { SelectPageMapping } from "./select-mapping"

export class SelectPage extends BasePage {
    public readonly page: Page;
    public mapping: SelectPageMapping

    public constructor(page: Page) {
        super(page);
        this.page = page;
        this.mapping = new SelectPageMapping(page);
    }
}