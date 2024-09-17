import { test } from "../../config/pages-fixtures"

test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();
    
    await test.step("Open the Select card", async () => {
        await testPage.openSelectCard();
    });
})

test.describe("Test suite for Select tests",
    { tag: "@select-all" }, () => {
        test("Select the apple using visible text", { tag: ["@select-fruit"] }, async ({ selectPage }) => {
            const fruitName = "Apple";
            
            await test.step("Select the apple option from the dropdown", async () => {                
                await selectPage.selectFruitByLabel(fruitName);
            });

            await test.step("Verify the selected option from the dropdown", async () => {
                const expectedMsg = "You have selected Apple";
                await selectPage.verifySelectedFruitMsg(expectedMsg);
                await selectPage.verifySelectedFruitByItsLabel(fruitName);
            });
        });

        test("Select your super hero's", { tag: ["@select-heroes"] }, async ({ selectPage }) => {
            await test.step("Select the apple option from the dropdown", async () => {
                const option = [{ value: "bt" }, { value: "im" }];
                const expectedMsg = "You have selected Batman";
                await selectPage.selectSuperHeroByValue(option);
                await selectPage.verifySelectedSuperHeroMsg(expectedMsg);
            });
        });

        test("[Home Challenge] Select your super hero's", { tag: ["@select-heroes-challenge"] }, async ({ selectPage }) => {
            await test.step("Select the apple option from the dropdown", async () => {
                type Option = { label?: string; value?: string };
                const heroesToBeSelected: Option[] = [{ label: "The Avengers" }, { value: "bt" }, { value: "im" }];
                const expectedSelections: { label?: string; value?: string }[] = [{ label: "The Avengers", value: "bt" }, { value: "im" }];
                const expectedMsg = "You have selected The Avengers";
                await selectPage.selectSuperHeroByValue(heroesToBeSelected);
                await selectPage.verifySelectedSuperHeroMsg(expectedMsg);
                await selectPage.verifySelectedSuperHeroes(expectedSelections);
            });
        });

        test("Select the last programming language and print all the options", { tag: ["@select-language"] }, async (
            { selectPage }) => {

            await test.step("Select the last programming language and print all the options", async () => {
                const chosenOption = 4;
                await selectPage.selectProgrammingLanguageByIndex(chosenOption);
                await selectPage.checkSelectedOption(chosenOption);
            });
        });
    });
