import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { InputPageMapping } from "./input-mapping";

export class InputPage extends BasePage {
    public readonly page: Page;
    public mapping: InputPageMapping

    public constructor(page: Page) {
        super(page);
        this.mapping = new InputPageMapping(page);
    }
}