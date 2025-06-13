import {test,expect} from '@playwright/test';

test("Test for new tab",async({browser})=>{
   const context = await browser.newContext();
   const page1 = await context.newPage();
   const page2 = await context.newPage();

   await page1.goto('https://rahulshettyacademy.com/loginpagePractise/');
   await page1.locator("[href*='documents-request']").click();
   await page1.pause();
   const txtcnt = await page2.locator('.red').textContent();
   console.log(txtcnt);
})