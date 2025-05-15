const { By } = require('selenium-webdriver');

class Loginpage {
    constructor(driver) {
        this.driver = driver;
        this.emailField = By.id('user-name');
        this.passwordField = By.id('password');
        this.loginButton = By.id('login-button');
    }

    async enterEmail(email) {
        await this.driver.findElement(this.emailField).sendKeys(email);
    }

    async enterPassword(password) {
        await this.driver.findElement(this.passwordField).sendKeys(password);
    }

    async clickLogin() {
        await this.driver.findElement(this.loginButton).click();
    }
}

module.exports = Loginpage;