import type { Locator, Page } from '@playwright/test';
import BasePage from '@pages/basePage';

export default class DashboardPage extends BasePage {
  public static readonly PATH = '/web/index.php/dashboard/index';

  constructor(page: Page) {
    super(page);
  }

  //action
  async navigateTo(): Promise<void> {
    await this._page.goto(DashboardPage.PATH);
  }
}