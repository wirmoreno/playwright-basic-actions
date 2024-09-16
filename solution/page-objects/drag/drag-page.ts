import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { DragPageMapping } from "./drag-mapping"

export class DragPage extends BasePage {
    public readonly page: Page;
    public mapping: DragPageMapping

    public constructor(page: Page) {
        super(page);
        this.page = page;
        this.mapping = new DragPageMapping(page);
    }

    async dragNDropSampleBox() {
        const sampleBoxBounding = await this.mapping.sampleBox.boundingBox();
        const mainBoxBounding = await this.mapping.mainBox.boundingBox();

        await this.mapping.sampleBox.hover();
        await this.page.mouse.down();

        /**
         * Need to hover twice due to "dragover" event that is only triggered after hover twice
         * https://playwright.dev/docs/input#dragging-manually
         */
        await this.mapping.mainBox.hover();
        await this.mapping.mainBox.hover();
        await this.page.mouse.up();
        await this.page.waitForTimeout(15000);
    }
}