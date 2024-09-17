import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { RadioPageMapping } from "./radio-mapping";

export class RadioPage extends BasePage {
    public readonly page: Page;
    public mapping: RadioPageMapping

    public constructor(page: Page) {
        super(page);
        this.mapping = new RadioPageMapping(page);
    }
}