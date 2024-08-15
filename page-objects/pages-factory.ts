import type { Page } from '@playwright/test'
import { TestPage } from './test/test-page';


export class Pages {
    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public test(): TestPage {
        return new TestPage(this.page);
    }
}