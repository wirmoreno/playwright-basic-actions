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

    /**
     * Select "Yes" or "No" option on the "Select any one" radio button
     * @param option The option to select
     */
    async selectOptOnSelectAnyOneRadioBtn(option: string) {
        this.mapping.selectAnyOne.getByLabel(option).check();
    }

    /**
     * Verify if the expected option is selected on the "Select any one" radio button
     * @param expectedOption The expected option to be selected
     */
    async verifyRadioBtnSelected(expectedOption: string) { 
        const radioBtn = this.mapping.selectAnyOne.getByLabel(expectedOption);
        await expect(radioBtn).toBeChecked();
    }

    /**
     * Accept the terms and conditions from the "Accept the T&C" checkbox
     */
    async acceptTermsAndConditions() {
        await this.mapping.acceptTermsNConditions.getByRole('checkbox').check();
    }

    /**
     * Verify if the terms and conditions checkbox is checked
     */
    async verifyTermsAndConditionsAccepted() {
        await expect(this.mapping.acceptTermsNConditions.getByRole('checkbox')).toBeChecked();
    }
}