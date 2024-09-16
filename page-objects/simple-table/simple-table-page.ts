import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { SimpleTablePageMapping } from "./simple-table-mapping"

export class SimpleTablePage extends BasePage {
    public readonly page: Page;
    public mapping: SimpleTablePageMapping

    public constructor(page: Page) {
        super(page);
        this.page = page;
        this.mapping = new SimpleTablePageMapping(page);
    }
}