import { test } from "../config/pages-fixtures"

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
                /**
                 * Passo 1: Crie um método chamado `selectOptOnSelectAnyOneRadioBtn` na page `RadioPage`. Este método deve selecionar a opção que possui o texto passado como parâmetro.
                 * Passo 2: Crie um método chamado `verifyRadioBtnSelected` na page `RadioPage`. Este método deve validar se a opção passada como parâmetro está selecionada.
                 * 
                 * doc:
                 * https://playwright.dev/docs/api/class-locator#locator-check
                 * https://playwright.dev/docs/input#checkboxes-and-radio-buttons
                 * https://playwright.dev/docs/test-assertions#auto-retrying-assertions
                 */
            });
        });

        test("Accept the T&C", { tag: ["@checkbox-agree"] }, async ({ radioPage }) => {
            await test.step("Accept the terms and conditions", async () => {
                /**
                 * Passo 1: Crie um método chamado `acceptTermsAndConditions` na page `RadioPage`. Este método deve aceitar os termos e condições.
                 * Passo 2: Crie um método chamado `verifyTermsAndConditionsAccepted` na page `RadioPage`. Este método deve validar se os termos e condições foram aceitos.
                 * doc:
                 * https://playwright.dev/docs/api/class-locator#locator-check
                 * https://playwright.dev/docs/input#checkboxes-and-radio-buttons
                 * https://playwright.dev/docs/test-assertions#auto-retrying-assertions
                 */
            });
        });
    });