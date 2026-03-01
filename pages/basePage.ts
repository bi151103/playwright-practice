// import { Locator, type Page } from "@playwright/test";
// import IGenericAction from '@pages/IGenericAction';

// export default abstract class BasePage {
//   private _genericAction: IGenericAction;

//   constructor(genericAction: IGenericAction) {
//     this._genericAction = genericAction;
//   }

//   async navigateTo(path: string): Promise<void> {
//     this._genericAction.navigateTo(path);
//   }

//   async click(locator: Locator): Promise<void> {
//     this._genericAction.locatorClick(locator);
//   }

//   async getLocator(selectorAttribute: string, type: 'role' | 'placeholder' | 'text' | 'cssSelector' | 'xpath'): Promise<Locator> {
//     switch(type) {
//       case 'role':
//         return this._genericAction
//     }
//   }
// }