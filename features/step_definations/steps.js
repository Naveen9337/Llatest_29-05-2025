
import { Given, When, Then } from "@cucumber/cucumber";
import { chromium } from "playwright";

Given('Login to the ecommerce application with {string} and {string}', async function (username, password) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill(username);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();

    // Optionally, attach page/context to 'this' for use in other steps
    this.page = page;
    this.context = context;
    this.browser = browser;
});


