import { test } from "../config/pages-fixtures"

/**
 * Utilize as dicas em cada passo/step para saber o que fazer, e como interagir com os componentes.
 * Também foi criado um arquivo TODO.md na raiz do repositório. Esse arquivo contém algumas dicas e links úteis.
 */

test.beforeEach("Open Base URL", async ({ basePage, testPage }) => {
    basePage.openApplication();

    await test.step("Open the Select card", async () => {
        await testPage.openSelectCard();
    });
});

test.describe("Test suite for Select tests",
    { tag: "@select-all" }, () => {
        test("Select the apple using visible text", { tag: ["@select-fruit"] }, async ({ selectPage: dropdownPage }) => {            

            await test.step("Select the apple option from the dropdown", async () => {      
                /**
                 * Passo 1: Crie um método chamado selectFruitByLabel(fruitName) na page dropdownPage. Esse método deve receber como parâmetro o nome da fruta  que deseja selecionar. O método deve selecionar o nome da frutra a partir da label do dropdown, ou seja, o texto visível e não o valor do atributo "value".
                 *
                 * docs: https://playwright.dev/docs/input#select-options
                */          
            });

            await test.step("Verify the selected option from the dropdown", async () => {
                /**
                 * Passo 1: Crie um método chamado verifySelectedFruitMsg(expectedMsg) na page dropdownPage. Esse método deve receber como parâmetro a mensagem que deseja verificar. O método deve verificar se a mensagem passada como parâmetro é exibida na tela.
                 * Passo 2: Crie um método chamado verifySelectedFruitByItsLabel(expectedFruitName) na page dropdownPage. Esse método deve receber como parâmetro o nome da fruta que deseja verificar. O método deve verificar se a fruta passada como parâmetro está selecionada no dropdown. O nome da fruta passada como parâmetro deve ser a mesma utilizada no método selectFruitByLabel(fruitName).
                 * 
                 * docs
                 * https://playwright.dev/docs/input#select-options
                 * https://playwright.dev/docs/api/class-elementhandle#element-handle-input-value
                 */
            });
        });

        test("Select your super hero's", { tag: ["@select-heroes"] }, async ({ selectPage: dropdownPage }) => {

            await test.step("Select multiple heroes from the dropdown", async () => {
                /**
                 * Passo 1: Crie um método chamado selectSuperHero(heroesName) na page dropdownPage. Esse método deve receber como parâmetro um array de objetos com as propriedades label e value. O método deve selecionar os super heróis a partir do atributo "value" do dropdown.
                 * Passo 2: Crie um método chamado verifySelectedSuperHeroMsg(expectedMsg) na page dropdownPage. Esse método deve receber como parâmetro a mensagem que deseja verificar. O método deve verificar se a mensagem passada como parâmetro é exibida na tela.
                 * 
                 * Dica: A mensagem mostrada será a do primeiro super herói selecionado.
                 */
            });
        });

        test("[Home Challenge] Select your super hero's", { tag: ["@select-heroes-challenge"] }, async ({ selectPage: dropdownPage }) => {
            await test.step("Select multiple heroes from the dropdown", async () => {
                /**
                 * Descubra como implementar um método que verifique todas as opções selecionadas no dropdown, e valide se as opções selecionadas são iguais as opções passadas como parâmetro, ou seja, se são iguais as opções esperadas.
                 * 
                 * Dica: 
                 * Utilize a propriedade HTML "selectedOptions" para extrair as opções selecionadas do elemento do tipo <select>.
                 * Você pode aproveitar a implementação do teste anterior para reutilizar o método selectSuperHero(heroesName).
                 */
            });
        });

        test("Select the last programming language and print all the options", { tag: ["@select-language"] }, async ({ selectPage: dropdownPage }) => {

            await test.step("Select the last programming language by it's index", async () => {
                /**
                 * Passo 1: Crie um método chamado selectProgrammingLanguageByIndex(index) na page dropdownPage. Esse método deve receber como parâmetro o índice da opção que deseja selecionar. O método deve selecionar a opção a partir do índice do dropdown.
                 * Passo 2: Crie um método chamado checkSelectedOption(index) na page dropdownPage. Esse método deve receber como parâmetro o índice da opção que deseja verificar. O método deve verificar se a opção passada como parâmetro está selecionada no dropdown.
                 * 
                 * Nota: Não é necessário printar nenhuma das opções do dropdown.
                 */
            });
        });
    });