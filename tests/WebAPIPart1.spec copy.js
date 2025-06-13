import {test,expect,request} from '@playwright/test';
const loginPayload = {userEmail:"naveen.naveen12@gmail.com",userPassword:"L-FRsh86#"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"681c6054fd2af1c99e14ea6e"}]};
let token;
let orderId;
test.beforeAll(async()=>{

    //Login API
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',

        {
            data : loginPayload,
        }
    )
    
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);
//Create Order API
   let orderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
        data: orderPayLoad,
        headers: {
            'authorization': token,
            'content-type': 'application/json'
        },
    });

    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orderId = orderResponseJson.orders[0];
});
//========================================================================


test('Web API Part 1 End to End test',async({page})=>
{
    
    
    await page.addInitScript(value=>{
        window.localStorage.setItem('token',value);
    }, token);

    // await page.locator('#userEmail').fill(email);
    // await page.locator('#userPassword').fill('L-FRsh86#');
    // await page.locator('#login').click();
    const productName = 'IPHONE 13 PRO';
    const confirmationMsg = " Thankyou for the order. ";
    const email = "naveen.naveen12@gmail.com";
    await page.goto('https://rahulshettyacademy.com/client');
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
    await page.pause();
    expect(orderId.includes(orderIdDetail)).toBeTruthy();
    
}); 





    

    



