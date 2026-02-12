import { test, expect } from '@fixtures';

test.describe('Dashboard', () => {
  test('should show Dashboard in header',
    async ({ dashboardPage, page }) => {
      await dashboardPage.navigateTo();

      const header = page.locator('header');
      const dashboardText = header.getByText('Dashboard');
      await expect(dashboardText).toBeVisible();
    }
  );
});