// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries : 1,//This also prevents race condition i.e. 
  // two test using same credential will obvisouly fail as 
  //both are trying to execute
  workers : 3,
  /* What you CAN set from the CLI:

Number of workers: --workers=4
Project: --project=chrome
Reporter: --reporter=html
Test file or directory
But you CANNOT do:
npx playwright test --mode=parallel   # ❌ Not supported
To control parallel/serial mode:

Use test.describe.configure({ mode: 'parallel' }) or test.describe.configure({ mode: 'serial' }) in your test files.
Summary:

mode is set in code, not in the CLI.
Use CLI for workers, project, etc., but not for mode.
*/
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'on-first-retry',//off,on
    
    
    
  },


};

module.exports = config;
