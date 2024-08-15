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

    async goToHomeNComeBack() {
        await this.mapping.goToHomeBtn.click();
        await this.page.goto("https://letcode.in/buttons");
        expect.soft(this.page.url()).toBe("https://letcode.in/buttons");
    }

    async getElementCoordinates() {
        const elementBoundingBox = await this.mapping.findLocationBtn.boundingBox();
        const x = elementBoundingBox?.x;
        const y = elementBoundingBox?.y;

        expect.soft(x).toBeTruthy();
        expect.soft(y).toBeTruthy();
    }

    async getElementHeightNWidth() {
        const elementBoundingBox = await this.mapping.tallAndFatBtn.boundingBox();
        const height = elementBoundingBox?.height;
        const width = elementBoundingBox?.width;

        expect.soft(height).toBeTruthy();
        expect.soft(width).toBeTruthy();
    }

    async getElementColor() {
        await expect.soft(this.mapping.colorBtn).toHaveCSS('background-color', 'rgb(138, 77, 118)');
    }

    async checkIfButtonIsDisabled() {
        await expect.soft(this.mapping.disabledBtn).toBeDisabled();
    }

    async clickAndHoldButton() {
        await this.mapping.buttonHold.click({ delay: 3000 });
        expect.soft(await this.mapping.buttonHold.textContent()).toBe("Button has been long pressed");
    }

}