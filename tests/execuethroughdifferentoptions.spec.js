// TEST_USERNAME=youruser 
// TEST_PASSWORD=yourpass npx playwright test
// // #  In your terminal or CI/CD, set variables 
// // #  before running tests:

// // Or use a .env file with dotenv (add .env to .gitignore):

// // And at the top of your test file:

// //GitLab :-
// variables:
//   TEST_USERNAME: "youruser"
//   TEST_PASSWORD: "yourpass"

// test:
//   script:
//     - npx playwright test    pipeline {
//       environment {
//         TEST_USERNAME = 'youruser'
//         TEST_PASSWORD = 'yourpass'
//       }
//       stages {
//         stage('Test') {
//           steps {
//             sh 'npx playwright test'
//           }
//         }
//       }
//     }

//     console.log('****************Jenkins Pipeline****************');
//     variables:
//   TEST_USERNAME: "youruser"
//   TEST_PASSWORD: "yourpass"

// test:
//   script:
//     - npx playwright test

