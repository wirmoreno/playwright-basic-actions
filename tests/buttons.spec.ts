import { test } from "../config/pages-fixtures"

/**
 * Utilize as dicas em cada passo/step para saber o que fazer, e como interagir com os componentes.
 * Também foi criado um arquivo TODO.md na raiz do repositório. Esse arquivo contém algumas dicas e links úteis.
 */

test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();

    await test.step("Open the buttons card", async () => {
        /**
         * Passo 1: Chame o método openButtonCard() que está na page "testPage"(page-objects > test-page.ts)
         */
    });
});

test.describe("Test suite for Button tests",
    { tag: "@buttons-all" }, () => {
        test("Go To Home", { tag: ["@button-go-home"] }, async ({ buttonsPage }) => {

            await test.step("Go to Home and come back here using driver command", async () => {
                /**
                 * Passo 1: Crie um método chamado goToHomeNComeBack() na page "buttonsPage"(page-objects > buttons > buttons-page.ts)
                 * Passo 2: Crie um método chamado verifyIfCurrentPageIsButtonsPage() na page "buttonsPage"(page-objects > buttons > buttons-page.ts)
                 * Passo 3: Chame o método goToHomeNComeBack() na page "buttonsPage" dentro desse step atual
                 * Passo 4: Chame o método verifyIfCurrentPageIsButtonsPage() na page "buttonsPage" dentro desse step atual
                 * 
                 * docs:
                 * https://playwright.dev/docs/api/class-page#page-goto
                 * https://playwright.dev/docs/api/class-page#page-url
                 * https://playwright.dev/docs/test-assertions#auto-retrying-assertions
                 */
            });
        });
        
        test("Find Element Coordinates", { tag: ["@button-find-location"] }, async ({ buttonsPage }) => {
            await test.step("Verify element coordinates", async () => {
                /**
                 * Passo 1: Crie um método chamado getFindLocationBtnCoordinates() na page "buttonsPage"(page-objects > buttons > buttons-page.ts). Este método deve extrair as coordenadas do botão "Find Location" e retornar um objeto com as coordenadas "x" e "y"
                 * Passo 2: Crie um método chamado verifyFindLocationBtnCoordinates(x: number, y: number) na page "buttonsPage"(page-objects > buttons > buttons-page.ts). Este método deve verificar se as coordenadas "x" e "y" passadas como 
                 * argumento são iguas as coordenadas atuais do botão "Find Location"
                 * 
                 * docs:
                 * https://playwright.dev/docs/api/class-locator#locator-bounding-box
                 * 
                 * Notas: 
                 * - As coordenadas podem variar de acordo com o tamanho da tela, então não se preocupe se as coordenadas não forem exatamente iguais a de algum amigo ao lado;
                 * - Utilize as coordenadas extraídas no passo 1 para verificar se as coordenadas estão corretas no passo 2;
                 * - Em um caso real, você pode usar as coordenadas para verificar se um elemento está visível na tela, ou se está em uma posição específica. Neste nosso caso estamos usando a mesma coordenada extraída no passo 1, então, 
                 * naturalmente o teste sempre irá passar, mas entenda que o conceito é verificar a posição do elemento na tela.
                 */
            });
        });

        test("Find the height & width of the button ", { tag: ["@button-find-width-height"] }, async ({ buttonsPage }) => {
            await test.step("Vefify the width and height from the 'How Tall & fat I am?' button", async () => {
                /**
                 * Passo 1: Crie um método chamado getTallNFatHeightNWidth() na page "buttonsPage"(page-objects > buttons > buttons-page.ts). Este método deve extrair a altura e largura do botão "How tall and fat I am?" e retornar um objeto com esses valores
                 * Passo 2: Crie um método chamado verifyTallNFatHeightNWidth(height: number, width: number) na page "buttonsPage"(page-objects > buttons > buttons-page.ts). Este método deve verificar se a altura e largura passadas como argumento são iguais a altura e largura do botão "How tall and fat I am?"
                 * 
                 * docs:
                 * https://playwright.dev/docs/api/class-locator#locator-bounding-box
                 * 
                 * nota: Os valores utilizados no passo 2 devem ser os mesmos valores extraídos no passo 1.
                 */
            });
        });

        test("Find the color of the button ", { tag: ["@button-color"] }, async ({ buttonsPage }) => {

            await test.step("Verify the 'What is my color?' button color", async () => {
                /**
                 * Passo 1: Crie um método chamado getWhatIsMyColorBtnColor() na page "buttonsPage"(page-objects > buttons > buttons-page.ts). Este método deve extrair a cor do botão "What is my color?" e retornar a cor
                 * Passo 2: Crie um método chamado verifyWhatIsMyColorBtnColor(actualColor: string) na page "buttonsPage"(page-objects > buttons > buttons-page.ts). Este método deve verificar se a cor passada como argumento é igual a cor do botão "What is my color?"
                 * 
                 * docs:
                 * https://playwright.dev/docs/api/class-locator#locator-get-attribute
                 * 
                 * nota: Os valores utilizados no passo 2 devem ser os mesmos valores extraídos no passo 1.
                 */
            });
        });

        test("Verify if the 'Confirm button is disabled' button is disabled", { tag: ["@button-disabled"] }, async ({ buttonsPage }) => {

            await test.step("Verify if the 'Confirm button is disabled' button is disabled", async () => {
                /**
                 * Passo 1: Crie um método chamado checkIfButtonIsDisabled() na page "buttonsPage"(page-objects > buttons > buttons-page.ts). Este método deve verificar se o botão "disabled" está desabilitado
                 * 
                 * docs:
                 * https://playwright.dev/docs/test-assertions#auto-retrying-assertions
                 */
            });
        });

        test("Click and Hold on the 'Button Hold!' button", { tag: ["@button-click-n-hold"] }, async ({ buttonsPage }) => {

            await test.step("Click and Hold on the button", async () => {
                /**
                 * Passo 1: Crie um método chamado clickAndHoldButton(delay: number) na page "buttonsPage"(page-objects > buttons > buttons-page.ts). Este método deve clicar e segurar no botão "Button Hold!" por um determinado tempo
                 * 
                 * docs:
                 * https://playwright.dev/docs/api/class-mouse#mouseclickandhold
                 */
            });

            await test.step("Verify if the click and hold was performed properly", async () => {
                /**
                 * Passo 1: Crie um método chamado verifyIfTheClickAndHoldButtonIsClicked(expectedMsg: string) na page "buttonsPage"(page-objects > buttons > buttons-page.ts). Este método deve verificar se a mensagem passada como argumento é exibida após o click and hold no botão "Button Hold!"
                 * 
                 * docs:
                 * https://playwright.dev/docs/test-assertions#auto-retrying-assertions
                 */
            });
        });
    });
