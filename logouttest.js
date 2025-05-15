const { Builder } = require('selenium-webdriver');
const { loginToSauceDemo } = require('./logintest');
const Logoutpage = require('../Pages/logoutpage');

(async function LogoutTest() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Step 1: Login
        await loginToSauceDemo(driver);

        // Step 2: Logout
        const logoutpage = new Logoutpage(driver);
        await logoutpage.logout();

        console.log("✅ Logout successful.");

    } catch (err) {
        console.error("❌ Logout test failed:", err);
    } finally {
        await driver.quit();
    }
})();