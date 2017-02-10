import { browser, element, by } from 'protractor';

export class SitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('st-root h1')).getText();
  }
}
