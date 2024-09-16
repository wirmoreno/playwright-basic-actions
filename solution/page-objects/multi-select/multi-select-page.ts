import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { MultiSelectPageMapping } from "./multi-select-mapping"

export class MultiSelectPage extends BasePage {
    public readonly page: Page;
    public mapping: MultiSelectPageMapping

    public constructor(page: Page) {
        super(page);
        this.page = page;
        this.mapping = new MultiSelectPageMapping(page);
    }

    async selectAll() {

        for await (const option of await this.mapping.selectableList.all()) {
            await option.click({ modifiers: ["Control"] });
        }
    }
}