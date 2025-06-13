import { expect } from "@playwright/test";
export class OrderListPage {

    constructor(page) {
        this.rowcount = page.locator('tbody tr');
        this.orderiddetails = page.locator('.col-text');
        this.page = page;
    }

    async verifyOrderListPage(orderId) {
        const orderCount = await this.rowcount.count();
        console.log(orderCount);

        for (let i = 0; i < orderCount; i++) {
            const orderList = await this.rowcount.nth(i).locator('th').textContent();
            console.log(orderList);

            if (orderId.includes(orderList)) {
                await this.rowcount.nth(i).locator('button').first().click();
                break;
            }

        }
    }

    async orderview(orderId) {
        
        await this.page.waitForLoadState('networkidle'); // or use waitForSelector with the correct selector

        const orderIdDetail = await this.orderiddetails.textContent();
        expect(orderId.includes(orderIdDetail)).toBeTruthy();

    }
}