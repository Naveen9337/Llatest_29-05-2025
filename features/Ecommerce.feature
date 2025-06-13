Feature: Ecommerce Validation

  Scenario: Placing the order
    Given  Login to the ecommerce application with "naveen.naveen12@gmail.com" and "L-FRsh86#"
    When Add "IPHONE 13 PRO" to the Cart
    Then Verify "IPHONE 13 PRO" is displayed in the Cart page
    Given Enter valid details and Place the order
    Then  Order is displayed in Order Histor page