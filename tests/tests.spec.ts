import { test } from "../config/pages-fixtures"
import { TestPage } from "../page-objects/test/test-page";


test.beforeEach("Open Base URL", async ({ basePage }) => {
    basePage.openApplication();
})

/**
 * Utilize as dicas em cada passo/step para saber o que fazer, e como interagir com os componentes.
 * Também foi criado um arquivo TODO.md na raiz do repositório. Esse arquivo contém algumas dicas e links úteis.
 */
test.describe("Test suite for Input tests",
    { tag: "@input-all" }, () => {
        test("Input", { tag: ["@input-fillout-fields"] }, async ({ testPage, inputPage }) => {

            await test.step("Open the input card", async () => {
                /**
                 * Passo 1: Chame o método openInputCard() que está na page "testPage"(page-objects > input-page.ts)
                 */
            });

            await test.step("Enter your full Name", async () => {
                /**
                 * Passo 1: Na input page(input-page.ts), crie um método chamado fillOutFullName(name) que recebe uma string 
                 * {name} como parametro. Essa string será o nome que será preenchido no campo "Enter your full Name"
                 * Passo 1.1:  No mesmo método do passo anterior, utilize as "Actions" do playwright para realizar o 
                 * preenchimento do campo com a string recebida como parâmetro.
                 * Passo 2: Crie outro método dentro da page chamado verifyFullNameField(name), que recebe um string {name} como 
                 * parâmetro. Verifique se o valor atual do campo é igual ao valor da string {name}
                 * Passo 3: Chame o método fillOutFullName(name) aqui, dentro desse step atual
                 * Passo 4: Chame o método verifyFullNameField(name) aqui, dentro desse step atual
                 * Passo 5: Execute o teste e veja se o campo foi preenchido corretamente
                 * 
                 * Docs úteis:
                 * Passo 1: https://playwright.dev/docs/input#text-input
                 * Passo 2: https://playwright.dev/docs/api/class-elementhandle#element-handle-input-value, 
                 * https://playwright.dev/docs/test-assertions#auto-retrying-assertions
                 */
            });

            await test.step("What is inside the text box", async () => {
                /**
                 * Passo 1: Crie um método chamado verifyTextFromWhatIsInsideTextBox(expectedText) que recebe uma 
                 * string {expectedText}
                 * Passo 1.1: Dentro do método criado no passo anterior, verifique se o valor atual do campo é igual ao valor da
                 * string {expectedText}
                 */
            });

            await test.step("Clear the text", async () => {
                /**
                 * Passo 1: Crie um método chamado clearTheClearTheTextField(). Esse método deve limpar o campo "Clear the text"
                 * Passo 2: Crie um método chamado verifyIfTheClearTheTextFieldIsClear(). Esse método deve verificar se o campo 
                 * "Clear the text" está vazio
                 */
            });

            await test.step("Confirm edit field is disabled", async () => {
                /**
                 * Passo 1: Crie um método chamado verifyEditFieldIsDisabled(). Esse método deve verificar se o campo "Confirm edit field is disabled" está desabilitado
                 */
            });

            await test.step("Confirm text is readonly", async () => {
                /**
                 * Passo 1: Crie um método chamado verifyTextIsReadonly(). Esse método deve verificar se o campo "Confirm text is readonly" está configurado como somente leitura
                 */
            });

            await test.step("Append a text and press keyboard tab", async () => {
                /**
                 * Passo 1: Crie um método chamado appendTextNPressTab(text) que recebe uma string {text} como parâmetro. 
                 * Essa string contém o texto que será preenchido no campo.
                 * Passo 1.1: Dentro do mesmo método criado no passo anterior, crie uma lógica para adicionar o {texto} no campo,
                 * porém, mantendo o valor atual.
                 * Passo 1.2: Utilize as "Actions" do playwright para pressionar a tecla "Tab" após adicionar o texto.
                 * Passo 2: Crie um método chamado verifyAppendTextFieldNPressTab(text) que recebe uma string {text} como 
                 * parâmetro. Essa string contém o texto que será comparado com o valor atual do campo.
                 * Passo 2.1: Dentro do método criado no passo anterior, verifique se o valor atual do campo é igual ao valor da 
                 * string {text}
                 * Passo 2.2: Verifique se o campo "What is inside the text box" está em foco.
                 * Passo 3: Chame o método criado no passo 1 dentro desse step atual.
                 * Passo 4: Execute o teste e veja se o campo foi preenchido corretamente
                 * 
                 * Docs úteis:
                 * Passo 1: https://playwright.dev/docs/input#mouse-click, https://playwright.dev/docs/input#type-characters,
                 * https://playwright.dev/docs/input#keys-and-shortcuts
                 * Passo 2: https://playwright.dev/docs/api/class-elementhandle#element-handle-input-value, 
                 * https://playwright.dev/docs/test-assertions#auto-retrying-assertions
                 * Passo
                 */
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
