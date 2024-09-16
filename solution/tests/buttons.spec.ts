import { test } from "../../config/pages-fixtures"

test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();

    await test.step("Open the buttons card", async () => {
        await testPage.openButtonCard();
    });
})

test.describe("Test suite for Button tests",
    { tag: "@buttons-all" }, () => {
        test("Go To Home", { tag: ["@button-go-home"] }, async ({ buttonsPage }) => {            

            await test.step("Goto Home and come back here using driver command", async () => {
                await buttonsPage.goToHomeNComeBack();
                await buttonsPage.verifyIfCurrentPageIsButtonsPage();
            });
        });

        test("Find Element Coordinates", { tag: ["@button-find-location"] }, async ({ buttonsPage }) => {

            await test.step("Verify element coordinates", async () => {
                const coordinates = await buttonsPage.getFindLocationBtnCoordinates();
                
                await buttonsPage.verifyFindLocationBtnCoordinates(coordinates.x, coordinates.y);
            });
        });

        test("Find the height & width of the button ", { tag: ["@button-find-width-height"] }, async ({ buttonsPage }) => {

            await test.step("Vefify the width and height from the 'How Tall & fat I am?' button", async () => {
                const hegihtNWidth = await buttonsPage.getTallNFatHeightNWidth();

                await buttonsPage.verifyTallNFatHeightNWidth(hegihtNWidth.height, hegihtNWidth.width);
            });
        });

        test("Find the color of the button ", { tag: ["@button-color"] }, async ({ buttonsPage }) => {

            await test.step("Verify the 'What is my color?' button color", async () => {
                const actualColor = await buttonsPage.getWhatIsMyColorBtnColor();

                await buttonsPage.verifyWhatIsMyColorBtnColor(actualColor);
            });
        });

        test("Verify if the 'Confirm button is disabled' button is disabled", { tag: ["@button-disabled"] }, async ({ buttonsPage }) => {

            await test.step("Verify if the 'Confirm button is disabled' button is disabled", async () => {
                await buttonsPage.checkIfButtonIsDisabled();
            });
        });

        test("Click and Hold on the 'Button Hold!' button", { tag: ["@button-click-n-hold"] }, async ({ buttonsPage }) => {

            await test.step("Click and Hold on the button", async () => {
                const delay = 3000;
                await buttonsPage.clickAndHoldButton(delay);
            });

            await test.step("Verify if the click and hold was performed properly", async () => {
                const expectedMsg = "Button has been long pressed";
                await buttonsPage.verifyIfTheClickAndHoldButtonIsClicked(expectedMsg);
            });
        });
    });