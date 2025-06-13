import {test,expect} from '@playwright/test';

test('@Web End to End UI test',async({page})=>
{

    const productName = 'IPHONE 13 PRO';
    const confirmationMsg = " Thankyou for the order. ";
    const email = "naveen.naveen12@gmail.com";
    const products = page.locator('.card-body');
    await page.on('request',request=>console.log(request.url()));
    await page.on('response',response=>console.log(response.url(),response.status()));


    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill('L-FRsh86#');
    await page.locator('#login').click();

    await page.waitForLoadState('networkidle');
    const count  = await products.count();

    for(let i=0;i<count;i++)
    {
        if(await products.nth(i).locator('b').textContent() === productName)
        {
            
            await products.nth(i).locator('text= Add To Cart').click();
            break;

        }
    }

    await page.locator('[routerlink*="cart"]').click();
    await page.waitForSelector('div li');
    const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible(); 
    //This is known as pseudo class
    expect(bool).toBeTruthy();

    await page.locator('text="Checkout"').click();

    await page.locator('[placeholder="Select Country"]').pressSequentially('ind',{delay:100});

    const dropdown =  page.locator('.ta-results');
    await dropdown.waitFor();

    const optionsCount = await dropdown.locator('button').count();
    console.log(optionsCount);
    
    
    for(let i=0;i<optionsCount;i++)
    {
        const text = await dropdown.locator('button').nth(i).textContent();
        console.log(text);
        if(text.trim() === "India")
        {
            await dropdown.locator('button').nth(i).click();
            break;
        }
    }
await page.pause();

    const val = await expect(page.locator('.user__name [type="text"]').first()).toHaveText(email);
    console.log(val);

    await page.locator('.action__submit').click();

    await expect(page.locator('.hero-primary')).toHaveText(confirmationMsg);

    const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderId);
    await page.locator('button:has-text("ORDER")').first().click();
    await page.locator('tbody').waitFor();
    
    const orderCount = await page.locator('tbody tr').count();
    console.log(orderCount);

    for(let i=0;i<orderCount;i++)
    {
       const orderList = await page.locator('tbody tr').nth(i).locator('th').textContent();
        console.log(orderList);

        if(orderId.includes(orderList))
        {
            await page.locator('tbody tr').nth(i).locator('button').first().click();
            break;
        }
       
    }

    const orderIdDetail = await page.locator('.col-text').textContent();
    expect(orderId.includes(orderIdDetail)).toBeTruthy();
    
    
    


     



    

    



});