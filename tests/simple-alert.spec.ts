import { test } from "../config/pages-fixtures"
import { TestPage } from "../page-objects/test/test-page";


test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();
})

/**
 * Utilize as dicas em cada passo/step para saber o que fazer, e como interagir com os componentes.
 * Também foi criado um arquivo TODO.md na raiz do repositório. Esse arquivo contém algumas dicas e links úteis.
 */

test.describe("Test suite for Simple Alert tests",
    { tag: "@alert-all" }, () => {
        test("Shopping List - Add all the prices and check if the total is correct", { tag: ["@alert-"] }, async (
            { simpleTablePage }) => {
            // TODO: Need to develop here
        });
    });