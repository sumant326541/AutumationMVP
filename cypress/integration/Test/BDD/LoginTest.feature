Feature: Login Feature Test

    Login to SwagLabs 

Scenario Outline:  Login With Valid Credential

Given User is on Swaglab Login page
When User enter username <username> and password <password> in text field
And User tap on login button
Then User should navigate to Products page
And User should able to see the specic product image
Examples:
|username                 |password      |
|"standard_user"          |"secret_sauce"|
|"problem_user"           |"secret_sauce"|
|"performance_glitch_user"|"secret_sauce"|


Scenario Outline: Login With blocked user

Given User is on Swaglab Login page
When User enter username <username> and password <password> in text field
And User tap on login button
Then User should see error message <errorMsg> on login page
Examples:
|username         |password      |errorMsg                                             |
|"locked_out_user"|"secret_sauce"|"Epic sadface: Sorry, this user has been locked out."|



