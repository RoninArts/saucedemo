const { Builder } = require('selenium-webdriver');
const { loginToSauceDemo } = require('./logintest'); // reuse login
const Cartpage = require('../Pages/cartpage');

(async function AddToCartTest() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await loginToSauceDemo(driver);

        const cartpage = new Cartpage(driver);
        await cartpage.addAllToCart();

        console.log("✅ Items added to cart successfully.");
    }   catch (err) {
        console.error("❌ Test failed:", err);
      }   
    })();