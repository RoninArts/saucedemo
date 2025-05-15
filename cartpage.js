const { By } = require('selenium-webdriver');

class Cartpage {
    constructor(driver) {
        this.driver = driver;
        this.backpackButton = By.id('add-to-cart-sauce-labs-backpack');
        this.bikeLightButton = By.id('add-to-cart-sauce-labs-bike-light');
    }

    async addBackpackToCart() {
        await this.driver.findElement(this.backpackButton).click();
    }

    async addBikeLightToCart() {
        await this.driver.findElement(this.bikeLightButton).click();
    }

    async addAllToCart() {
        await this.addBackpackToCart();
        await this.addBikeLightToCart();
    }
}

module.exports = Cartpage;
