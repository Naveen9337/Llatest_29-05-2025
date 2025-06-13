import {test,expect} from '@playwright/test';

test('UI Control like rdbutton,checkbx and assertion',async({page})=>{

    const documentLink = page.locator("[href*='documents-request']");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('.radiotextsty').last().click();
    await page.waitForSelector('#okayBtn');
    await page.locator('#okayBtn').click();
    
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    const validateval = await page.locator('.radiotextsty').last().isChecked();
    console.log(validateval);
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute('class','blinkingText');

   //await page.pause();
})