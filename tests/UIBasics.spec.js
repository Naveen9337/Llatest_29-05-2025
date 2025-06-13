import {test,expect} from '@playwright/test';

test('First test case to check css',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //const text = await page.locator('p.text-center').textContent();
    //console.log(text);

    await page.locator('#username').fill('rahulshetty');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();
    const text = await page.locator('[style*=block]').textContent();
    console.log(text);
    await page.locator('#username').fill('');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();
    await page.waitForSelector('.card-body a');
    const products = page.locator('.card-body');
    const itemscnt = await page.locator('.card-body a').count();
    console.log(itemscnt);
   for(let i=0;i<itemscnt;i++){

    let itemName = await page.locator('.card-body a').nth(i).textContent();
    console.log(itemName);

    if(itemName.trim() === 'iphone X')
    {
        await page.locator('.card-body').nth(i).locator('[text="Add")]').click();
        break;
    }
   
   console.log('Success');
    
   }

});