import {expect} from '@playwright/test';
export class CheckOutPage{

    constructor(page,productName)
    {
       //this.product =  page.locator("h3:has-text('IPHONE 13 PRO')");
        this.checkout = page.locator('text="Checkout"');
        this.productname = page.locator(`h3:has-text("${productName}")`);
       
        this.page = page;
       
    }

   async checkoutProductName()
    {
           await this.page.waitForSelector('div li');
           const bool = await this.productname.isVisible();
           //This is known as pseudo class
           await expect(bool).toBeTruthy();
       
           await this.checkout.click();
    }
}