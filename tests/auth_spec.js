describe ("Test createRole", function(){
    var common = require('../config/common.js'),
        authForm = new common.authForm(),
        expectElement = element(by.xpath('//h6[@class="docs-header"]'));
        browser.waitForAngularEnabled(false);

    beforeEach(function () {
        authForm.getSite();
    });

    // 1.авторизация;
    it("screenFirstTest", function () {
        authForm.authorization();
        expect(expectElement.isDisplayed()).toBeTruthy();
    });

});