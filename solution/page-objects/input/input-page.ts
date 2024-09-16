import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { InputPageMapping } from "./input-mapping";

export class InputPage extends BasePage {
    public readonly page: Page;
    public mapping: InputPageMapping

    public constructor(page: Page) {
        super(page);
        this.mapping = new InputPageMapping(page);
    }

    /**
     * Fills out the full name field
     * @param fullName The desired name to type in the field
     */
    async fillOutFullName(fullName: string) {
        await this.mapping.fullName.fill(fullName);
    }

    /**
     * Fills out the input for the "Enter your full Name" field
     * @param expectedFullName The expected text to be compared with the actual value on the FullName field
     */
    async verifyFullNameField(expectedFullName: string) {
        const actualText = await this.mapping.fullName.inputValue();
        expect.soft(actualText).toBe(expectedFullName);
    }

    /**
     * Appends a text into the 'Append a text and press keyboard tab' field and then press tab
     * @param text the text to append on the field
     */
    async appendTextNPressTab(text: string) {
        await this.mapping.appendTextNPressTab.click();
        await this.mapping.appendTextNPressTab.pressSequentially(text);
        await this.mapping.appendTextNPressTab.press("Tab");        
    }

    /**
     * Verify if the actual texto on the "Append a text and press keyboard tab" field is equal to {text} and check if the 
     * "What is inside the text box" field is actually on focus
     * @param text The expected text to be on the "Append a text and press keyboard tab" field
     */ 
    async verifyAppendTextFieldNPressTab(text: string) {
        expect.soft(this.mapping.appendTextNPressTab.inputValue()).toBe(text);
        expect.soft(this.mapping.whatIsInsideTheTextBox).toBeFocused();
    }

    /**
     * Verify if the text from the {expectedText} matches with the "What is inside the text box" field
     * @param expectedText The expected text to be on the "What is inside the text box" field
     */
    async verifyTextFromWhatIsInsideTextBox(expectedText: string) {
        const text = await this.mapping.whatIsInsideTheTextBox.inputValue();
        expect.soft(text).toEqual(expectedText);
    }

    /**
     * Clear the "Clear the text" field
     */
    async clearTheClearTheTextField() {
        await this.mapping.clearText.clear();        
    }

    /**
     * Verify if the "Clear the text" field is empty/clear
     */
    async verifyIfTheClearTheTextFieldIsClear() {
        expect.soft(this.mapping.clearText.inputValue()).toBeFalsy();
    }

    /**
     * Verify if the "Confirm edit field is disabled" field is disabled
     */
    async verifyEditFieldIsDisabled() {
        expect.soft(this.mapping.disabled).toBeDisabled();
    }

    /**
     * Verifiy if the "Confirm text is readonly" is readonly
     */
    async verifyTextIsReadonly() {
        expect.soft(this.mapping.readOnly).toHaveAttribute("readonly");
    }
}