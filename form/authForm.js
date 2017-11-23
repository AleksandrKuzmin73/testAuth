/**
 * Created by Aleksandr Kuzmin on 23.11.2017.
 */
var authForm = function() {
    var buttonAuthorizations = element(by.xpath('//div[@class="row example"]//a[@role="button"][1]')),
        url = 'https://auth-demo.aerobatic.io/',
        exec = require('child_process').execFile;

    this.getSite = function () {
        browser.get(url);
    };

    this.authorization = function () {
        buttonAuthorizations.click();
        exec('auth.exe');
    };

};
module.exports = authForm;