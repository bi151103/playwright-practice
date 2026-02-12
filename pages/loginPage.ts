import type { Locator, Page } from '@playwright/test';
import BasePage from '@pages/basePage';

export default class LoginPage extends BasePage {
  public static readonly PATH = '/web/index.php/auth/login';

  private _usernameInput: Locator;
  private _passwordInput: Locator;
  private _loginButton: Locator;
  constructor(page: Page) {
    super(page);
    this._usernameInput = this._page.getByPlaceholder('Username');
    this._passwordInput = this._page.getByPlaceholder('Password');
    this._loginButton = this._page.getByRole('button', { name: 'Login' });
  }

  //action
  async navigateTo(): Promise<void> {
    await this._page.goto(LoginPage.PATH);
  }

  async login(username: string, password: string): Promise<void> {
    await this._usernameInput.fill(username);
    await this._passwordInput.fill(password);

    await this._loginButton.click();
  }
}