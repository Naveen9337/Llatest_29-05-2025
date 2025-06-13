import { expect } from "@playwright/test";
export class OrderPage{

constructor(page)
{

    this.selectcountry = page.locator('[placeholder="Select Country"]');
    this.dropdown      = page.locator('.ta-results');
   this.placeOrder    = page.locator('.action__submit')
   this.emailId =   page.locator('.user__name [type="text"]');
    


}

async selectcountryfrmdrpdwn(entercountry,selectctry)
{
    await this.selectcountry.pressSequentially(entercountry, { delay: 100 });

    const dropdown = this.dropdown;
    await dropdown.waitFor();

    const optionsCount = await dropdown.locator('button').count();
    console.log(optionsCount);


    for (let i = 0; i < optionsCount; i++) {
        const text = await dropdown.locator('button').nth(i).textContent();
        console.log(text);
        if (text && text.trim() === selectctry) {
            await dropdown.locator('button').nth(i).click();
            break;
        }
    }
}

async verifyemailandNavigate(username)
{
     const val = await expect(this.emailId .first()).toHaveText(username);
        console.log(val);
    
        this.placeOrder.click();
}




}