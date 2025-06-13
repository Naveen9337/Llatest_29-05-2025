import {test,expect} from '@playwright/test';

test('@Web Basic UI test with different app',async({page}) =>{

    const productItem = await page.locator('.card-body');
    
await page.setViewportSize({ width: 1920, height: 1080 }); // Maximize window
await page.goto('https://rahulshettyacademy.com/client');
await page.locator('#userEmail').fill('naveen.naveen12@gmail.com');
await page.locator('#userPassword').fill('L-FRsh86#');
await page.locator('#login').click();
await page.waitForSelector('.card-body b');
const productCount = await page.locator('.card-body b').count();
 console.log(productCount);

const productName = await page.locator('.card-body b').allTextContents();
console.log(productName);


});