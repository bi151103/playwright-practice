import { test as testBase } from '@playwright/test';
import type { Page } from '@playwright/test';
import LoginPage from '@pages/loginPage';
import DashboardPage from '@pages/dashboardPage';

type CustomFixtures = {
  loginPage: LoginPage,
  dashboardPage: DashboardPage
}

export const test = testBase.extend<CustomFixtures>({
  loginPage: async ({ page } : { page: Page }, use: (value: LoginPage) => Promise<void>) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  dashboardPage: async ({ page } : { page: Page }, use: (value: DashboardPage) => Promise<void>) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  }
});

export { expect } from '@playwright/test';