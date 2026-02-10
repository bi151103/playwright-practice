import { test, expect } from '@playwright/test';

test.describe('login', () => {
  test.beforeEach('go to orange hrm page',
    async ({ page }) => {
      await page.goto('/web/index.php/auth/login');
    }
  );

  test('should login successfully',
    async ({ page }) => {
      const usernameInput = page.getByPlaceholder('Username');
      const passwordInput = page.getByPlaceholder('Password');

      if (process.env.OHRM_USERNAME) {
        await usernameInput.fill(process.env.OHRM_USERNAME);
      }
      if (process.env.OHRM_PASSWORD) {
        await passwordInput.fill(process.env.OHRM_PASSWORD);
      }

      const loginButton = page.getByRole('button', { name: 'Login' });
      await loginButton.click();

      await expect(page).toHaveURL('/web/index.php/dashboard/index');
    }
  );
});