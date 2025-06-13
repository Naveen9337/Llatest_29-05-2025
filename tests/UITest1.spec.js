import {test,expect} from '@playwright/test';
console.log('Test for Git 1');
console.log('Test for Git 1');

//Browser(Fixture) - glabally available to each and every playwright test
test('Browser context declaration first Test',async ({browser})=>{
     //const basepage = new BasePage(page)
     //await basepage.goto('https://rahulshettyacademy.com/client/');
     //chrome - plugins/cookies
     const context = await browser.newContext();
     const page = await context.newPage();
     await page.goto("https://rahulshettyacademy.com/client/");
     await page.waitForLoadState('networkidle');
     const title1 = await page.title();
     console.log(title1);
     await expect(page).toHaveTitle(title1);

});

test('Same test with only page as fixture', async({page})=>{

      await page.goto('https://google.com'),
      await page.waitForLoadState('networkidle');
      const title2 = await page.title();
     console.log(title2);
    await expect(page).toHaveTitle(title2);
});