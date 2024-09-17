import { test as baseTest } from '@playwright/test';
import { TestPage } from '../page-objects/test/test-page';
import { BasePage } from '../page-objects/base-page';
import { InputPage } from '../page-objects/input/input-page'
import { ButtonsPage } from '../page-objects/buttons/buttons-page'
import { SelectPage } from '../page-objects/select/select-page'
import { MultiSelectPage } from '../page-objects/multi-select/multi-select-page'
import { RadioPage } from '../page-objects/radio/radio-page'
import { FormPage } from '../page-objects/form/form-page'

type pages = {
    basePage: BasePage;
    testPage: TestPage;
    inputPage: InputPage;
    buttonsPage: ButtonsPage;
    selectPage: SelectPage;
    multiSelectPage: MultiSelectPage;
    radioPage: RadioPage;
    formPage: FormPage;
}

const getPages = baseTest.extend<pages>({
    basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
    testPage: async ({ page }, use) => {
        await use(new TestPage(page));
    },
    inputPage: async ({ page }, use) => {
        await use(new InputPage(page));
    },
    buttonsPage: async ({ page }, use) => {
        await use(new ButtonsPage(page));
    },
    selectPage: async ({ page }, use) => {
        await use(new SelectPage(page));
    },
    multiSelectPage: async ({ page }, use) => {
        await use(new MultiSelectPage(page));
    },
    radioPage: async ({ page }, use) => {
        await use(new RadioPage(page));
    },
    formPage: async ({ page }, use) => {
        await use(new FormPage(page));
    }
});

export const test = getPages;
export { expect } from "@playwright/test"
