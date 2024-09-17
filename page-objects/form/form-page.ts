import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { FormPageMapping } from "./form-mapping";

export class FormPage extends BasePage {
    public readonly page: Page;
    public mapping: FormPageMapping

    public constructor(page: Page) {
        super(page);
        this.mapping = new FormPageMapping(page);
    }
}