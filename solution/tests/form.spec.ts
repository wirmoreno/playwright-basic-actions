import { test } from "../../config/pages-fixtures"

test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();

    await test.step("Open the forms page", async () => {
        await testPage.openFormCard();
    });
})

test.describe("Test suite for Form tests",
    { tag: "@form-all" }, () => {
        test("Select any one", { tag: ["@form-fill-all"] }, async ({ formPage }) => {
            await test.step("fill out all form field", async () => {
                const data = {
                    firstName: "William",
                    lastName: "Moreno",
                    email: "test@gmail.com",
                    countryCode: "Brazil (+55)",
                    phoneNumber: "1234567890",
                    address1: "123 Main St",
                    address2: "321 Main St",
                    state: "California",
                    postalCode: "12345",
                    country: "Brazil",
                    dateOfBirth: "01/01/2000",
                    gender: "Male"
                };
                await formPage.fillFormNSubmit(data);
            });
        });
    });