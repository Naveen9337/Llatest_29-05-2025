// @ts-check
const { devices } = require('@playwright/test');
const { permission } = require('process');

const config = {
  testDir: './tests',
  retries: 1,
  Workers : 5, //This means we are disabling parallel mechanism.if workers are not defined
  //then playwright by default will run invoke 5 workers or parallel at max
  //workers can also be defined as test execution process/environment or in UI we can
  //say as browser invocation.
  //npx playwright test --workers=4 also is the option.Replace 4 with the number of parallel workers you want.
//This overrides the workers setting in your config file 
// for that run.

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {

    timeout: 5000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  projects:
    [
      {
        name: "safari",

        use: {

          browserName: 'webkit',
          headless: false,
          screenshot: 'off',
          trace: 'on-first-retry',//off,on
          // viewport : 
          // {
          //   width:1920,
          //   height:1080,
          // },
          //...devices['iPhone 11'],



        },

      },

      {
        name : "chrome",

        use: {

    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'on-first-retry',//off,on
   //viewport : {width:1920,height:1080}
   ignorehttpsErrors : true,
   Permissions   : ['Geolocation'],
   video         : 'retain-on-failure',
   

    
    
    
  }

      }


    ]



};

module.exports = config;
