describe("dropDown e2e test", function() {

it('Go to main page', function() {
  browser.driver.ignoreSynchronization = true
  //need to change path for test
  browser.driver.get('file:///Users/weit/Desktop/dropdown.html');
  expect(browser.driver.getCurrentUrl()).toContain('dropdown')
});

it('click dropdown choose item and show related link', function() {
  browser.driver.findElement(by.className('dropbtn')).click();
  browser.driver.findElement(by.id('myInput')).sendKeys('Nanj');
  browser.driver.findElement(by.partialLinkText('Nanjing')).click()
  //for record purpose
  browser.driver.sleep(2000);
  expect(browser.driver.getCurrentUrl()).toContain('#Nanjing')
});

});
