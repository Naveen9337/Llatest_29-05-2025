import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import { DashBoardPage } from '../PageObjects/DashBoardPage';
import { CheckOutPage } from '../PageObjects/CheckOutPage';
import { OrderPage } from '../PageObjects/OrderPage';
import { OrderHistoryPage } from '../PageObjects/OrderHistoryPage';
import { OrderListPage } from '../PageObjects/OrderListPage';
//Json->string->js object
//import dataset from '../TestData/ClientAppPODataSet.json';
const dataset = JSON.parse(JSON.stringify(require('../TestData/ClientAppPODataSet.json')));

for (const data of dataset) {
   
    test(`@Web test for ${data.productName}`, async ({ page }) => {

        //const productName = 'IPHONE 13 PRO';
        const confirmationMsg = " Thankyou for the order. ";
        //const username = "naveen.naveen12@gmail.com";
        // const password = "L-FRsh86#";
        const entercountry = 'Ind';
        const selectctry = 'India';

        //await page.on('request',request=>console.log(request.url()));
        //await page.on('response',response=>console.log(response.url(),response.status()));


        console.log('*******************Login Page**************************');
        
        const loginpage = new LoginPage(page);
        await loginpage.goto();
        await loginpage.validLogin(data.username, data.password);



        console.log('*******************DashBoard Page**************************');

        const dashboardpage = new DashBoardPage(page);
        await dashboardpage.searchProductAddCart(data.productName);
        await dashboardpage.navigateToCart();

        console.log('**************************CheckOut Page************************');

        const checkoutpage = new CheckOutPage(page, data.productName);
        await checkoutpage.checkoutProductName();

        console.log('**************Order Page**************')

        const orderpage = new OrderPage(page);
        await orderpage.selectcountryfrmdrpdwn(entercountry, selectctry);
        await orderpage.verifyemailandNavigate(data.username);

        console.log('*************OrderReview Page********************');

        const Orderhistorypage = new OrderHistoryPage(page);
        const orderId = await Orderhistorypage.verifyOrder(confirmationMsg);
        console.log(orderId);
        await Orderhistorypage.navigatetoOrderListPage();

        console.log('*************************OrderList Page*******************************');

        const orderlistpage = new OrderListPage(page);
        await orderlistpage.verifyOrderListPage(orderId);
        await orderlistpage.orderview(orderId);

    });

};
