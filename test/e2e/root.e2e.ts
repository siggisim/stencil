import { browser, element, by } from 'protractor';

describe('Stencil E2E Tests', function () {

  let expectedMsg = 'Stencil';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});