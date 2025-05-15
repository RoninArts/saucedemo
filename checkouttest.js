const { Builder } = require('selenium-webdriver');
const { loginToSauceDemo } = require('./logintest');
const Cartpage = require('../Pages/cartpage');
const Checkoutpage = require('../Pages/checkoutpage');

(async function CheckoutTest() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Step 1: Login
        await loginToSauceDemo(driver);

        // Step 2: Add Items to Cart
        const cartpage = new Cartpage(driver);
        await cartpage.addAllToCart();

        // Step 3: Checkout Process
        const checkoutpage = new Checkoutpage(driver);
        await checkoutpage.completeCheckout("Rohail", "Khan", "54000");

        console.log("✅ Checkout completed successfully.");

    }  catch (err) {
        console.error("❌ Test failed:", err);
      }   
    })();