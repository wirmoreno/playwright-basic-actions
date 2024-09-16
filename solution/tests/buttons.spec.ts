import { test } from "../../config/pages-fixtures"

test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();

    await test.step("Open the buttons card", async () => {
        await testPage.openButtonCard();
    });
})

test.describe("Test suite for Button tests",
    { tag: "@buttons-all" }, () => {
        test("Buttons - Go To Home", { tag: ["@button-go-home"] }, async ({ buttonsPage }) => {            

            await test.step("Goto Home and come back here using driver command", async () => {
                await buttonsPage.goToHomeNComeBack();
                await buttonsPage.verifyIfCurrentPageIsButtonsPage();
            });
        });

        test("Buttons - Find Element Coordinates", { tag: ["@button-find-location"] }, async ({ buttonsPage }) => {

            await test.step("Get element coordinates", async () => {
                await buttonsPage.getElementCoordinates();
            });
        });

        test("Buttons - Find the height & width of the button ", { tag: ["@button-find-width-height"] }, async ({ buttonsPage }) => {

            await test.step("Get element width and height", async () => {
                await buttonsPage.getElementHeightNWidth();
            });
        });

        test("Buttons - Find the color of the button ", { tag: ["@button-color"] }, async ({ buttonsPage }) => {

            await test.step("Get element width and height", async () => {
                await buttonsPage.getElementColor();
            });
        });

        test("Buttons - Confirm button is disabled / Click and Hold Button ", { tag: ["@button-state"] }, async (
            { buttonsPage }) => {

            await test.step("Confirm button is disabled", async () => {
                await buttonsPage.checkIfButtonIsDisabled();
            });

            await test.step("Click and Hold Button", async () => {
                await buttonsPage.clickAndHoldButton();
            });
        });
    });