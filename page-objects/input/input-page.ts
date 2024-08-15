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
     * Appends a text into the 'Append a text and press keyboard tab' field and then press tab
     * @param text the text to append on the field
     */
    async appendTextNPressTab(text: string) {
        await this.mapping.appendTextNPressTab.click();
        await this.mapping.appendTextNPressTab.pressSequentially(text);
        await this.mapping.appendTextNPressTab.press("Tab");

        expect.soft(this.mapping.appendTextNPressTab.getAttribute("value")).toBe(text);
        expect.soft(this.mapping.whatIsInsideTheTextBox).toBeFocused();
    }

    async getTextFromWhatIsInsideTheTextBox() {
        const text = await this.mapping.whatIsInsideTheTextBox.getAttribute("value");
        expect.soft(text).toEqual("ortonikc");
    }

    async clearText() {
        await this.mapping.clearText.clear();
        expect.soft(this.mapping.clearText.getAttribute("value")).toBeFalsy();
    }


    async expectDisabled() {
        expect.soft(this.mapping.disabled).toBeDisabled();
    }

    async expectReadOnly() {
        expect.soft(this.mapping.readOnly).toHaveAttribute("readonly");
    }
}