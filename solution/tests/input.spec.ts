import { test } from "../../config/pages-fixtures"
import { TestPage } from "../page-objects/test/test-page";


test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();

    await test.step("Open the input card", async () => {
        await testPage.openInputCard();
    });
})

test.describe("Test suite for Input tests",
    { tag: "@input-all" }, () => {
        test("Input", { tag: ["@input-fillout-fields"] }, async ({ inputPage }) => {

            await test.step("Enter your full Name", async () => {
                const name = "William Ribeiro Moreno";
                await inputPage.fillOutFullName(name);
                await inputPage.verifyFullNameField(name);
            });

            await test.step("What is inside the text box", async () => {
                const expectedText = "ortonikc";
                await inputPage.verifyTextFromWhatIsInsideTextBox(expectedText);
            });

            await test.step("Clear the text", async () => {
                await inputPage.clearTheClearTheTextField();
                await inputPage.verifyIfTheClearTheTextFieldIsClear();
            });

            await test.step("Confirm edit field is disabled", async () => {
                await inputPage.verifyEditFieldIsDisabled();
            });

            await test.step("Confirm text is readonly", async () => {
                await inputPage.verifyTextIsReadonly();
            });

            await test.step("Append a text and press keyboard tab", async () => {
                const text = "Text to append";
                await inputPage.appendTextNPressTab(text);
                await inputPage.verifyAppendTextFieldNPressTab(text);
            });
        })
    });
