import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { DropdownPageMapping } from "./dropdown-mapping"

export class DropdownPage extends BasePage {
    public readonly page: Page;
    public mapping: DropdownPageMapping

    public constructor(page: Page) {
        super(page);
        this.page = page;
        this.mapping = new DropdownPageMapping(page);
    }
}