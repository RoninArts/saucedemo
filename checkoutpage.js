const { By } = require('selenium-webdriver');

class Checkoutpage {
    constructor(driver) {
        this.driver = driver;
        this.cartButton = By.id('shopping_cart_container');
        this.checkoutButton = By.id('checkout');
        this.firstNameField = By.id('first-name');
        this.lastNameField = By.id('last-name');
        this.zipCodeField = By.id('postal-code');
        this.continueButton = By.id('continue');
        this.finishButton = By.id('finish');
    }

    async proceedToCart() {
        await this.driver.findElement(this.cartButton).click();
    }

    async clickCheckout() {
        await this.driver.findElement(this.checkoutButton).click();
    }

    async fillCheckoutInfo(firstName, lastName, zip) {
        await this.driver.findElement(this.firstNameField).sendKeys(firstName);
        await this.driver.findElement(this.lastNameField).sendKeys(lastName);
        await this.driver.findElement(this.zipCodeField).sendKeys(zip);
    }

    async continueAndFinish() {
        await this.driver.findElement(this.continueButton).click();
        await this.driver.findElement(this.finishButton).click();
    }

    async completeCheckout(firstName, lastName, zip) {
        await this.proceedToCart();
        await this.clickCheckout();
        await this.fillCheckoutInfo(firstName, lastName, zip);
        await this.continueAndFinish();
    }
}

module.exports = Checkoutpage;