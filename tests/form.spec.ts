import { test } from "../config/pages-fixtures"

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
                /**
                 * Passo 1: Na "formPage" page, crie um método para cada ação de preenchimento do formulário.
                 * Passo 2: Em seguida, crie outro método chamado "fillFormNSubmit" que recebe um objeto com os dados do formulário, e chame os métodos criados no passo anterior.
                 */
            });
        });
    });