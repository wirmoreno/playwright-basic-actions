import { test } from "../../config/pages-fixtures"
import { TestPage } from "../page-objects/test/test-page";


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