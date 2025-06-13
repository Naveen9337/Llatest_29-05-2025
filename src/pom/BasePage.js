export class BasePage{

  constructor(page){
this.page = page;
  } 

  async goto(url){
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async getTitle(){
    return this.page.title();
  }
}

//module.export = loginPage();