import {expect} from '@playwright/test';
export class OrderHistoryPage{

    constructor(page)
    {
      this.confmsg =  page.locator('.hero-primary');
      this.orderId = page.locator('.em-spacer-1 .ng-star-inserted');
      this.orderList = page.locator('button:has-text("ORDER")');
      this.orderlistwait = page.locator('tbody');
    }

    async verifyOrder(confirmationMsg)
    {
      

    await expect(this.confmsg).toHaveText(confirmationMsg);

    return await this.orderId.textContent();
    
    }

    async navigatetoOrderListPage()
    {
    await  this.orderList.first().click();
    this.orderlistwait.waitFor();
    }
}