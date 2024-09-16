import { test } from "../config/pages-fixtures"
import { TestPage } from "../page-objects/test/test-page";


test.beforeEach("Open Base URL", async ({ basePage }) => {
    basePage.openApplication();
})

test.describe("Test suite for Input tests",
    { tag: "@input-all" }, () => {
        test("Input", { tag: ["@input-fillout-fields"] }, async ({ testPage, inputPage }) => {

            await test.step("Open the input card", async () => {
                await testPage.openInputCard();
            });

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

test.describe("Test suite for Button tests",
    { tag: "@buttons-all" }, () => {
        test("Buttons - Go To Home", { tag: ["@button-go-home"] }, async ({ testPage, buttonsPage }) => {

            await test.step("Open the buttons card", async () => {
                await testPage.openButtonCard();
            });

            await test.step("Goto Home and come back here using driver command", async () => {
                await buttonsPage.goToHomeNComeBack();
            });
        }),
            test("Buttons - Find Element Coordinates", { tag: ["@button-find-location"] }, async ({ testPage, buttonsPage }) => {

                await test.step("Open the buttons card", async () => {
                    await testPage.openButtonCard();
                });

                await test.step("Get element coordinates", async () => {
                    await buttonsPage.getElementCoordinates();
                });
            }),

            test("Buttons - Find the height & width of the button ", { tag: ["@button-find-width-height"] }, async ({ testPage, buttonsPage }) => {

                await test.step("Open the buttons card", async () => {
                    await testPage.openButtonCard();
                });

                await test.step("Get element width and height", async () => {
                    await buttonsPage.getElementHeightNWidth();
                });
            }),

            test("Buttons - Find the color of the button ", { tag: ["@button-color"] }, async ({ testPage, buttonsPage }) => {

                await test.step("Open the buttons card", async () => {
                    await testPage.openButtonCard();
                });

                await test.step("Get element width and height", async () => {
                    await buttonsPage.getElementColor();
                });
            }),

            test("Buttons - Confirm button is disabled / Click and Hold Button ", { tag: ["@button-state"] }, async ({ testPage, buttonsPage }) => {

                await test.step("Open the buttons card", async () => {
                    await testPage.openButtonCard();
                });

                await test.step("Confirm button is disabled", async () => {
                    await buttonsPage.checkIfButtonIsDisabled();
                });

                await test.step("Click and Hold Button", async () => {
                    await buttonsPage.clickAndHoldButton();
                });
            })
    });

test.describe("Test suite for Select tests",
    { tag: "@select-all" }, () => {
        test("Select the apple using visible text", { tag: ["@select-fruit"] }, async ({ testPage, dropdownPage }) => {

            await test.step("Open the Select card", async () => {
                await testPage.openSelectCard();
            });

            await test.step("Select the apple option from the dropdown", async () => {
                await dropdownPage.selectFruit("Apple", "You have selected Apple");
            });
        });
        test("Select your super hero's", { tag: ["@select-heroes"] }, async ({ testPage, dropdownPage }) => {

            await test.step("Open the Select card", async () => {
                await testPage.openSelectCard();
            });

            await test.step("Select the apple option from the dropdown", async () => {
                const option = [{ label: "The Avengers" }, { value: "bt" }, { value: "im" }];
                await dropdownPage.selectSuperHero(option, "You have selected The Avengers");
            });
        });
        test("Select the last programming language and print all the options", { tag: ["@select-language"] }, async ({ testPage, dropdownPage }) => {

            await test.step("Open the Select card", async () => {
                await testPage.openSelectCard();
            });

            await test.step("Select the last programming language and print all the options", async () => {
                const choosenOption = "Java";
                const expectedOptions = ['JavaScript', 'Java', 'Python', 'Swift', 'C#'];
                await dropdownPage.selectProgrammingLanguage(choosenOption, "You have selected Java", expectedOptions);
            });
        });
        test("Select India using value & print the selected value", { tag: ["@select-country"] }, async ({ testPage, dropdownPage }) => {

            await test.step("Open the Select card", async () => {
                await testPage.openSelectCard();
            });

            await test.step("Select India using value & print the selected value", async () => {
                const choosenOption = "India";
                await dropdownPage.selectCountry(choosenOption);
            });
        })
    });

test.describe("Test suite for Multi-Select tests",
    { tag: "@multi-select-all" }, () => {
        test("Let's select 😉 all", { tag: ["@multi-select1"] }, async ({ testPage, multiSelectPage }) => {

            await test.step("Open the Multi Select card", async () => {
                await testPage.openMultiSelectCard();
            });

            await test.step("Select all options", async () => {
                await multiSelectPage.selectAll();
            });
        })
    });

test.describe("Test suite for Simple Alert tests",
    { tag: "@alert-all" }, () => {
        test("Shopping List - Add all the prices and check if the total is correct", { tag: ["@alert-"] }, async ({ testPage, simpleTablePage }) => {
            // TODO: Need to develop here
        });
    });

// test.describe("Test suite for Simple Tables tests",
//     { tag: "@tables-all" }, () => {
//         test("Shopping List - Add all the prices and check if the total is correct", { tag: ["@tables-shopping-list"] }, async ({ testPage, simpleTablePage }) => {

//             await test.step("Open the Simple Tables card", async () => {
//                 await testPage.openTablesCard();
//             });

//             await test.step("Check if the sum if the price column is matching to the total price", async () => {
//                 await simpleTablePage.checkShoppingList();
//             });
//         });
//         test("Let's handle it😉 - Mark Raj as present", { tag: ["@tables-lets-handle"] }, async ({ testPage, simpleTablePage }) => {

//             await test.step("Open the Simple Tables card", async () => {
//                 await testPage.openTablesCard();
//             });

//             await test.step("Mark a specific name as present by clicking on the checkbox", async () => {
//                 await simpleTablePage.markGivenNameAsPresent("Raj");
//             });
//         });
//         test("Sortable Tables - Check if the sorting is working properly", { tag: ["@tables-sort-tables"] }, async ({ testPage, simpleTablePage }) => {

//             await test.step("Open the Simple Tables card", async () => {
//                 await testPage.openTablesCard();
//             });

//             await test.step("Check if name column is sorted properly", async () => {
//                 await simpleTablePage.checkTableSortingBy("name", 0, "string");
//             });

//             await test.step("Check if calories column is sorted properly", async () => {
//                 await simpleTablePage.checkTableSortingBy("calories", 1, "number");
//             });

//             await test.step("Check if fat column is sorted properly", async () => {
//                 await simpleTablePage.checkTableSortingBy("fat", 2, "number");
//             });

//             await test.step("Check if carbs column is sorted properly", async () => {
//                 await simpleTablePage.checkTableSortingBy("carbs", 3, "number");
//             });

//             await test.step("Check if carbs column is sorted properly", async () => {
//                 await simpleTablePage.checkTableSortingBy("protein", 4, "number");
//             });

//             await test.step("Check if carbs column is sorted properly", async () => {
//                 await simpleTablePage.checkTableSortingBy("Cholesterol", 5, "number");
//             });
//         });
//     });
