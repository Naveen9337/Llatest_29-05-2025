import {test,expect} from '@playwright/test';

test('Playwright Locators',async({page})=>{
   
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByLabel('Password').fill('L-FRsh86#');
   // await page.locator('input:has-text("Email")').fill("naveen.naveen12@gmail.com");
   await page.locator('[name="email"]').fill("naveen.naveen12@gmail.com");
   await page.getByRole('button',{name:'Submit'}).click();
   await page.getByText('Success! The Form has been submitted successfully!.').click();
   console.log('this is a test');
   await page.getByRole('link',{name:'Shop'}).click();
   await page.locator('app-card').filter({hasText: 'iphone X'}).
   getByRole('button').click();
    
})