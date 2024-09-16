import { test } from "../../config/pages-fixtures"

test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();
    
    await test.step("Open the Select card", async () => {
        await testPage.openSelectCard();
    });
})

test.describe("Test suite for Select tests",
    { tag: "@select-all" }, () => {
        test("Select the apple using visible text", { tag: ["@select-fruit"] }, async ({ dropdownPage }) => {

            await test.step("Select the apple option from the dropdown", async () => {
                await dropdownPage.selectFruit("Apple", "You have selected Apple");
            });
        });

        test("Select your super hero's", { tag: ["@select-heroes"] }, async ({ dropdownPage }) => {

            await test.step("Select the apple option from the dropdown", async () => {
                const option = [{ label: "The Avengers" }, { value: "bt" }, { value: "im" }];
                await dropdownPage.selectSuperHero(option, "You have selected The Avengers");
            });
        });

        test("Select the last programming language and print all the options", { tag: ["@select-language"] }, async (
            { dropdownPage }) => {

            await test.step("Select the last programming language and print all the options", async () => {
                const choosenOption = "Java";
                const expectedOptions = ['JavaScript', 'Java', 'Python', 'Swift', 'C#'];
                await dropdownPage.selectProgrammingLanguage(choosenOption, "You have selected Java", expectedOptions);
            });
        });

        test("Select India using value & print the selected value", { tag: ["@select-country"] }, async ({ dropdownPage }) => {

            await test.step("Select India using value & print the selected value", async () => {
                const choosenOption = "India";
                await dropdownPage.selectCountry(choosenOption);
            });
        })
    });
