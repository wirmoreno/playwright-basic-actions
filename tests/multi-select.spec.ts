import { test } from "../config/pages-fixtures"

/**
 * Utilize as dicas em cada passo/step para saber o que fazer, e como interagir com os componentes.
 * Também foi criado um arquivo TODO.md na raiz do repositório. Esse arquivo contém algumas dicas e links úteis.
 */

test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();

    await test.step("Open the Multi Select card", async () => {
        await testPage.openMultiSelectCard();
    });
});

test.describe("Test suite for Multi-Select tests",
    { tag: "@multi-select-all" }, () => {
        test("Let's select 😉 all", { tag: ["@multi-select1"] }, async ({ multiSelectPage }) => {

            await test.step("Select all options", async () => {
                /**
                 * Passo 1: Crie um método chamado `selectAll` na page `MultiSelectPage`. Este método deve selecionar todas as opções do elemento multi-select.
                 * 
                 * docs:
                 * https://playwright.dev/docs/api/class-locator#locator-click
                 * https://playwright.dev/docs/api/class-locator#locator-all
                 * 
                 * nota:
                 * Não é necessário validar se as opções foram selecionadas adequadamente. A idéia dessa tarefa é apenas aprender diferentes maneiras de interagir com elementos. Validações já foram feitas nas tarefas anteriores e vocês já tem o conhecimento necessário para isso.
                 */
            });
        })
    });
