const { Builder } = require('selenium-webdriver');
const Loginpage = require('../Pages/loginpage');

async function loginToSauceDemo(driver) {
    await driver.get('https://www.saucedemo.com/');
    const loginpage = new Loginpage(driver);
    await loginpage.enterEmail("standard_user");
    await loginpage.enterPassword("secret_sauce");
    await loginpage.clickLogin();
    await driver.sleep(2000); // wait for login
}

module.exports = { loginToSauceDemo };