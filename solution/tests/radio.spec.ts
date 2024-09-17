import { test } from "../../config/pages-fixtures"

test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();

    await test.step("Open the radio card", async () => {
        await testPage.openRadioCard();
    });
})

test.describe("Test suite for Radio & Checkbox tests",
    { tag: "@radio-checkbox-all" }, () => {
        test("Select any one", { tag: ["@radio-select-one"] }, async ({ radioPage }) => {
            await test.step("Select one option", async () => {
                const option = "Yes";
                await radioPage.selectOptOnSelectAnyOneRadioBtn(option);
                await radioPage.verifyRadioBtnSelected(option);
            });
        });

        test("Accept the T&C", { tag: ["@checkbox-agree"] }, async ({ radioPage }) => {
            await test.step("Accept the terms and conditions", async () => {
                await radioPage.acceptTermsAndConditions();
                await radioPage.verifyTermsAndConditionsAccepted();
            });
        });
    });