import { expect, Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { DropdownPageMapping } from "./dropdown-mapping"

export class DropdownPage extends BasePage {
    public readonly page: Page;
    public mapping: DropdownPageMapping

    public constructor(page: Page) {
        super(page);
        this.page = page;
        this.mapping = new DropdownPageMapping(page);
    }

    async selectFruit(fruitName: string, expectedSubtitle: string) {
        await this.mapping.selectFruit.selectOption(fruitName);

        expect.soft(this.mapping.selectionSubtitle).toHaveText(expectedSubtitle);
    }

    async selectSuperHero(heroesName: Object, expectedSubtitle: string) {
        await this.mapping.selectSuperheros.selectOption(heroesName);

        expect.soft(this.mapping.selectionSubtitle).toHaveText(expectedSubtitle);
    }

    async selectProgrammingLanguage(language: string, expectedSubtitle: string, expectedOptions: string[]) {
        const allDropdownOptionsTxt = (await this.mapping.selectLanguage.innerText()).split("\n");
        await this.mapping.selectLanguage.selectOption(language);

        expect.soft(this.mapping.selectionSubtitle).toHaveText(expectedSubtitle);
        expect.soft(allDropdownOptionsTxt).toStrictEqual(expectedOptions);
    }

    async selectCountry(country: string) {
        await this.mapping.selectCountry.selectOption(country);
        const selectedCountry = await this.mapping.selectCountry.inputValue();

        expect.soft(selectedCountry).toBe(country);
    }


}