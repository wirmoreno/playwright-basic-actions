import { test as baseTest } from '@playwright/test';
import { TestPage } from '../page-objects/test/test-page';
import { BasePage } from '../page-objects/base-page';
import { InputPage } from '../page-objects/input/input-page'
import { ButtonsPage } from '../page-objects/buttons/buttons-page'
import { SelectPage } from '../page-objects/select/select-page'
import { DragPage } from '../page-objects/drag/drag-page'
import { MultiSelectPage } from '../page-objects/multi-select/multi-select-page'
import { SimpleTablePage } from '../page-objects/simple-table/simple-table-page'

type pages = {
    basePage: BasePage;
    testPage: TestPage;
    inputPage: InputPage;
    buttonsPage: ButtonsPage;
    selectPage: SelectPage;
    dragPage: DragPage;
    multiSelectPage: MultiSelectPage;
    simpleTablePage: SimpleTablePage;
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
    dragPage: async ({ page }, use) => {
        await use(new DragPage(page));
    },
    multiSelectPage: async ({ page }, use) => {
        await use(new MultiSelectPage(page));
    },
    simpleTablePage: async ({ page }, use) => {
        await use(new SimpleTablePage(page));
    }
});

export const test = getPages;
export { expect } from "@playwright/test"
