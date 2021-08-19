Feature: Add Products to Cart

    User Can add product to cart

Scenario Outline:  Add products to cart
Given User is on Swaglab Login page
When User enter username <username> and password <password> in text field
And User tap on login button
Then User should navigate to Products page
When User tap on first product Add To Cart Button
Then User should see product count updated to shopping cart badge

Examples:
|username                 |password      |
|"standard_user"          |"secret_sauce"|