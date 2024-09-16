import { test } from "../../config/pages-fixtures"

test.beforeEach("Open Base URL", async ({ basePage }) => {
    basePage.openApplication();
});

test.describe("Test suite for Simple Alert tests",
    { tag: "@alert-all" }, () => {
        test("Shopping List - Add all the prices and check if the total is correct", { tag: ["@alert-"] }, async ({ testPage, simpleTablePage }) => {
            // TODO: Need to develop here
        });
    });