import { test, expect } from '@fixtures';
import DashboardPage from '@pages/dashboardPage';
import { FILE_PATHS } from '@shared/constant'

test.describe('Login page', () => {
  test('should login successfully',
    async ({ page, loginPage, context }) => {
      await loginPage.navigateTo();
      
      if (!(process.env.OHRM_USERNAME && process.env.OHRM_PASSWORD)) {
        throw new Error('username or password is missing');
      }
      await loginPage.login(process.env.OHRM_USERNAME, process.env.OHRM_PASSWORD);

      await expect(page).toHaveURL(DashboardPage.PATH);

      await context.storageState({ path: FILE_PATHS.MOBILE_AUTHORIZED_STORAGE_STATE });
    }
  );
});