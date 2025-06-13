import {test,expect} from '@playwright/test';

test('Handle Child window or new tab',async({browser})=>{
 
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLik = page.locator("[href*='documents-request']");
    await page.setViewportSize({ width: 1920, height: 1080 });
   
    const [newPage,newPage2] = await Promise.all(
        [
    context.waitForEvent('page'),//Listen for new page if we put this step below 
    //step click on link then it will fail to listen to that particular new page opened
    //Fulfilled,Rejected,pending
    documentLik.click(),

        ])//new page is opened
   
   const txtcnt = await newPage.locator('.red').textContent();
   console.log(txtcnt);

   const email = txtcnt
  .split(' ')
  .filter(word => word.includes('@'))
  .map(word => word.trim())[0];

console.log('Extracted email:', email);

const domain =  email.split('@')[1];
console.log(`domain name is : ${domain}`);

await page.waitForSelector('#username');
await page.locator('#username').fill("");
await page.locator('#username').fill('rahulshettyacademy');
const userName1 = await page.locator('#username').inputValue();
console.log(userName1);

/*This will correctly print the value inside the input field.
textContent() only works for elements that have visible text 
between their tags, not for input fields.*/
await page.locator('#password').fill('learning');
await page.locator('#signInBtn').click({timeout:3000});
await page.waitForSelector('.card-body');
//await page.waitForTimeout(3000);
const itemName = await page.locator('.card-body a').allTextContents();
console.log(itemName);


});