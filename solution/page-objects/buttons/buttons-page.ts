import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { ButtonsPageMapping } from "./buttons-mapping"

export class ButtonsPage extends BasePage {
    public readonly page: Page;
    public mapping: ButtonsPageMapping

    public constructor(page: Page) {
        super(page);
        this.page = page;
        this.mapping = new ButtonsPageMapping(page);
    }

    /**
     * Go to Home and come back to Buttons page by using the goto command
     */
    async goToHomeNComeBack() {
        await this.mapping.goToHomeBtn.click();
        await this.page.goto("https://letcode.in/buttons");
    }

    /**
     * Verify if the current page is the Buttons page
     */
    async verifyIfCurrentPageIsButtonsPage() {
        expect(this.page.url()).toBe("https://letcode.in/buttons");
    }

    /**
     * Get the "Find Location" button coordinates
     * @returns The bounding box of the "Find Location" button
     */
    async getFindLocationBtnCoordinates() {
        const elementBoundingBox = await this.mapping.findLocationBtn.boundingBox();
        const x = elementBoundingBox?.x;
        const y = elementBoundingBox?.y;
        const boundingBox = {x: x, y: y};

        return boundingBox;
    }

    /**
     * Verify if the current coordinates are matching the expected coordinates
     * @param x The expected "x" coordinate
     * @param y The expected "y" coordinate
     */
    async verifyFindLocationBtnCoordinates(x: number, y: number) {
        expect.soft(x).toBeTruthy();
        expect.soft(y).toBeTruthy();
    }

    /**
     * Get the height and width of the "How tall and fat I am?" button
     * @returns The bounding box of the "How tall and fat I am?" button
     */
    async getTallNFatHeightNWidth() {
        const elementBoundingBox = await this.mapping.tallAndFatBtn.boundingBox();
        const height = elementBoundingBox?.height;
        const width = elementBoundingBox?.width;
        const boundingBox = {height: height, width: width};

        return boundingBox;       
    }

    /**
     * Verify the if the width and height from the "How tall and fat I am?" button is matching with the expected values
     * @param height The expected height
     * @param width The expected width
     */
    async verifyTallNFatHeightNWidth(height: number, width: number) {
        expect.soft(height).toBeTruthy();
        expect.soft(width).toBeTruthy();
    }    

    /**
     * Get the color of the "What is my color?" button
     * @returns The color of the "What is my color?" button
     */
    async getWhatIsMyColorBtnColor() {
        const elementColor = await this.mapping.colorBtn.getAttribute('style');
        
        return elementColor;
    }

    /**
     * Verify if the color of the "What is my color?" button is matching with the expected color
     * @param color The expected color
     */
    async VerifiyWhatIsMyColorBtnColor(color: string) {
        await expect.soft(this.mapping.colorBtn).toHaveCSS(color);
    }

    /**
     * Verify if the "Confirm button is disabled" button is disabled
     */
    async checkIfButtonIsDisabled() {
        await expect.soft(this.mapping.disabledBtn).toBeDisabled();
    }

    /**
     * Click and hold the "Click and Hold Button" button
     */
    async clickAndHoldButton() {
        await this.mapping.buttonHold.click({ delay: 3000 });
        expect.soft(await this.mapping.buttonHold.textContent()).toBe("Button has been long pressed");
    }
}