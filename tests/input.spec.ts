import { test } from "../config/pages-fixtures"
import { TestPage } from "../page-objects/test/test-page";

/**
 * Utilize as dicas em cada passo/step para saber o que fazer, e como interagir com os componentes.
 * Também foi criado um arquivo TODO.md na raiz do repositório. Esse arquivo contém algumas dicas e links úteis.
 */

test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();

    await test.step("Open the input card", async () => {
        /**
         * Passo 1: Chame o método openInputCard() que está na page "testPage"(page-objects > input-page.ts)
         */
    });
});

test.describe("Test suite for Input tests",
    { tag: "@input-all" }, () => {
        test("Input", { tag: ["@input-fillout-fields"] }, async ({ inputPage }) => {
            
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
