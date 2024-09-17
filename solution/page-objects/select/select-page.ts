import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { SelectPageMapping } from "./select-mapping"

export class SelectPage extends BasePage {
    public readonly page: Page;
    public mapping: SelectPageMapping

    public constructor(page: Page) {
        super(page);
        this.page = page;
        this.mapping = new SelectPageMapping(page);
    }

    /**
     * Select the fruit by its label
     * @param fruitName The name of the fruit to be selected
     */
    async selectFruitByLabel(fruitName: string) {
        await this.mapping.selectFruit.selectOption({ label: fruitName });
    }

    /**
     * Verify the selected fruit message
     * @param expectedMsg The expected message to be verified
     */
    async verifySelectedFruitMsg(expectedMsg: string) {
        expect.soft(this.mapping.selectionSubtitle).toHaveText(expectedMsg);
    }

    /**
     * Verify the selected fruit by its label
     * @param expectedFruitName The expected fruit name to be verified
     */
    async verifySelectedFruitByItsLabel(expectedFruitName: string) {
        const fruitNamesNValues = { "apple": "0", "mango": "1", "orange": "2", "banana": "3", "pine apple": "4" };        
        const expectedValue = fruitNamesNValues[expectedFruitName.toLowerCase()];

        const actualOption = await this.mapping.selectFruit.inputValue();
        expect.soft(actualOption).toBe(expectedValue);
    }

    /**
     * Select the super heroes by its values
     * @param heroesValue A array containing the super heroes values to be selected
     */
    async selectSuperHeroByValue(heroesValue: Object[]) {
        await this.mapping.selectSuperheros.selectOption( heroesValue );        
    }

    /**
     * Verify the selected super hero message
     * @param expectedMsg The expected message to be verified
     */
    async verifySelectedSuperHeroMsg(expectedMsg: string) {
        expect.soft(this.mapping.selectionSubtitle).toHaveText(expectedMsg);
    }

    /**
     * Verifies if the selected super heroes are matching the expected values
     * @param expectedHeroes A array containing the super heroes values or labels to be verified
     */
    async verifySelectedSuperHeroes(expectedHeroes: { label?: string; value?: string }[]) {
        const selectedOptions = await this.mapping.selectSuperheros.evaluateAll((selectElement: HTMLSelectElement[]) => {
            return Array.from(selectElement[0].selectedOptions).map((option: Object) => ({
                label: option.text,
                value: option.value,
            }));
        });

        const result = this.isSelectedOptionsMatching(selectedOptions, expectedHeroes);
        expect.soft(result).toBe(true);
    }

    /**
     * Verify if the selected super heroes are matching the expected values
     * @param selectedOptions The actual selected super heroes
     * @param objectsToMatch The expected selected super heroes
     * @returns True if the selected super heroes are matching the expected values
     */
    isSelectedOptionsMatching(selectedOptions: { label?: string; value?: string }[], objectsToMatch: { label?: string; value?: string }[]): boolean {
        return selectedOptions.every(option => 
            objectsToMatch.some(obj => 
                Object.entries(obj).some(([key, value]) =>                     
                    option.label === value || option.value === value
                )
            )
        );
    }

    /**
     * Select a programming language by its index
     * @param index The index of the programming language to be selected
     */
    async selectProgrammingLanguageByIndex(index: number) {
        await this.mapping.selectLanguage.selectOption({index: index});        
    }

    /**
     * Verify if the selected option is matching the expected index
     * @param expectedIndex The expected index of the selected option
     */
    async checkSelectedOption(expectedIndex: number) {
        const actualIndex = await this.mapping.selectLanguage.evaluate((selectElement: HTMLSelectElement) => selectElement.selectedIndex);
        expect.soft(actualIndex).toBe(expectedIndex);
    }
}