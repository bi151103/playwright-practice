// import IGenericAction from '@pages/IGenericAction';
// import { Locator, Page } from '@playwright/test';
// import { CssSelectorType, PlaceholderType, RoleType, TextType } from './locatorType';

// export default class GenericAction implements IGenericAction {
//   private _page: Page;

//   constructor(page: Page) {
//     this._page = page;
//   }
  
//   async navigateTo(path: string): Promise<void> {
//     await this._page.goto(path);
//   }

//   async click(): Promise<void> {

//   }

//   getLocator(locatorType: RoleType | PlaceholderType | TextType | CssSelectorType): Locator {
//     switch (locatorType.type) {
//       case 'role':
//         return this._page.getByRole(locatorType.role, locatorType.option);
//       case 'placeholder':
//         return this._page.getByPlaceholder(locatorType.placeholderText, locatorType.option);
//       case 'text':
//         return this._page.getByText(locatorType.text, locatorType.option);
//       case 'cssSelector':
//         return this._page.locator(locatorType.selectorText, locatorType.option);
//       default:
//         throw new Error('invalid locator type');
//     }
//   }
// }