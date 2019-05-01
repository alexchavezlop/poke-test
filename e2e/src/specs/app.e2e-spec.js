'use strict'
const AppPage = require('../page-objects/app.po.js');

describe('workspace-project App', () => {
  const page = new AppPage();
  let EC = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Navigate no page', () => {
    page.navigateTo();
  });

  it('Search ditto pokemon', () => {
    page.inputSearch.sendKeys('ditto');
    page.btnSearch.click();

    browser.wait(EC.visibilityOf(page.divCurrentPoke), 3000);    
    expect(page.divCurrentPokes.Count()).toEqual(1);
  });

  
});
