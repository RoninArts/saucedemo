const { By, until } = require('selenium-webdriver');

class Logoutpage {
    constructor(driver) {
        this.driver = driver;
        this.menuButton = By.id('react-burger-menu-btn');
        this.logoutLink = By.id('logout_sidebar_link');
    }

    async openMenu() {
        const menu = await this.driver.wait(until.elementLocated(this.menuButton), 5000);
        await menu.click();
    }

    async clickLogout() {
        const logoutBtn = await this.driver.wait(until.elementLocated(this.logoutLink), 5000);
        await this.driver.wait(until.elementIsVisible(logoutBtn), 5000);
        await logoutBtn.click();
    }

    async logout() {
        await this.openMenu();
        await this.clickLogout();
    }
}

module.exports = Logoutpage;
