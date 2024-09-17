import type { Locator, Page } from "@playwright/test";

export class FormPageMapping {
    public readonly page: Page;
    public readonly firstName: Locator;
    public readonly lastName: Locator;
    public readonly email: Locator;
    public readonly countryCode: Locator;
    public readonly countryCodeLabel: Locator;
    public readonly phone: Locator;
    public readonly addressLine1: Locator;
    public readonly addressLine2: Locator;
    public readonly state: Locator;
    public readonly postalCode: Locator;
    public readonly countryLabel: Locator;
    public readonly countryDropdown: Locator;
    public readonly dateOfBirth: Locator;
    public readonly genderLabel: Locator;
    public readonly gender: Locator;
    public readonly termsNConditions: Locator;
    public readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.countryCodeLabel = this.page.getByTestId("countrycode");
        this.countryCode = this.page.locator("[class='field']", { has: this.countryCodeLabel}).locator("select");
        this.phone = '';
        this.addressLine1 = '';
        this.addressLine2 = '';
        this.state = '';
        this.postalCode = '';
        this.countryLabel = '';
        this.countryDropdown = this.page.locator("[class='field']", { has: this.countryLabel}).locator("select");
        this.dateOfBirth = '';
        this.genderLabel = '';
        this.gender = this.page.locator("[class='field']", { has: this.genderLabel });
        this.termsNConditions = this.page.getByLabel('I agree to the terms and');
        this.submitButton = '';
    }
}