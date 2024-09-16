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
                await multiSelectPage.selectAll();
            });
        })
    });
