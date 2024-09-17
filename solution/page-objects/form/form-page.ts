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

    /**
     *  Fill the first name in the form
     * @param firstName The first name to be filled in the form
     */
    async fillFirstName(firstName: string) {
        await this.mapping.firstName.fill(firstName);
    }

    /**
     * Fill the last name in the form
     * @param lastName The last name to be filled in the form
     */
    async fillLastName(lastName: string) {
        await this.mapping.lastName.fill(lastName);
    }

    /**
     * Fill the email in the form
     * @param email The email to be filled in the form
     */
    async fillEmail(email: string) {
        await this.mapping.email.fill(email);
    }

    /**
     * Select the country code in the form
     * @param countryCode The country code to be selected in the form
     */
    async selectCountryCode(countryCode: string) {
        await this.mapping.countryCode.selectOption(countryCode);
    }

    /**
     * Fill the phone number in the form
     * @param phone The phone number to be filled in the form
     */
    async fillPhoneNumber(phone: string) {
        await this.mapping.phone.fill(phone);
    }

    /**
     * Fill the address line 1 in the form
     * @param address The address to be filled in the form
     */
    async fillAddress1(address: string) {
        await this.mapping.addressLine1.fill(address);
    }

    /**
     * Fill the address line 2 in the form
     * @param address The address to be filled in the form
     */
    async fillAddress2(address: string) {
        await this.mapping.addressLine2.fill(address);
    }

    /**
     * Fill the state in the form
     * @param state The state to be filled in the form
     */
    async fillState(state: string) {
        await this.mapping.state.fill(state);
    }

    /**
     * Fill the postal code in the form
     * @param postalCode The postal code to be filled in the form
     */
    async fillPostalCode(postalCode: string) {
        await this.mapping.postalCode.fill(postalCode);
    }

    /**
     * Fill the country in the form
     * @param country The country to be selected in the form
     */
    async selectCountry(country: string) {
        await this.mapping.countryDropdown.selectOption(country);
    }

    /**
     * Fill the date of birth in the form
     * @param date The date of birth to be filled in the form
     */
    async fillDateOfBirth(date: string) {
        await this.mapping.dateOfBirth.pressSequentially(date);
    }

    /**
     * Fill the gender in the form
     * @param gender The gender to be selected in the form
     */
    async selectGender(gender: string) {
        await this.mapping.gender.getByText(gender, { exact: true }).check();
    }

    /**
     * Accept the terms and conditions in the form
     */
    async acceptTermsAndConditions() {
        await this.mapping.termsNConditions.check();
    }

    /**
     * Submit the form
     */
    async submitForm() {
        await this.mapping.submitButton.click();
    }

    /**
     * Fill the form
     * @param data The data to be filled in the form
     * @param acceptTerms The flag to accept the terms and conditions
     * @param submit The flag to submit the form
     */
    async fillFormNSubmit(data: any, acceptTerms: boolean = true, submit: boolean = true) {
        await this.fillFirstName(data.firstName);
        await this.fillLastName(data.lastName);
        await this.fillEmail(data.email);
        await this.selectCountryCode(data.countryCode);
        await this.fillPhoneNumber(data.phoneNumber);
        await this.fillAddress1(data.address1);
        await this.fillAddress2(data.address2);
        await this.fillState(data.state);
        await this.fillPostalCode(data.postalCode);
        await this.selectCountry(data.country);
        await this.fillDateOfBirth(data.dateOfBirth);
        await this.selectGender(data.gender);
        if (acceptTerms) {
            await this.acceptTermsAndConditions();
        }
        if (submit) {
            await this.submitForm();
        }
    }
}