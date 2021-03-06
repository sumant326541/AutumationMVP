<img width="100" alt="Screenshot 2021-06-29 at 8 12 27 AM" src="https://user-images.githubusercontent.com/39675511/130088744-76894af9-5c0e-491a-8d7c-d75953a3fba0.png">

# Task 1: Bug report of given screenshot of a Form. 
### solution : https://github.com/sumant326541/AutumationMVP/issues

- Bug1: https://github.com/sumant326541/AutumationMVP/issues/1
- Bug2: https://github.com/sumant326541/AutumationMVP/issues/2
- Bug3: https://github.com/sumant326541/AutumationMVP/issues/3
- Bug4: https://github.com/sumant326541/AutumationMVP/issues/4
- Observation: https://github.com/sumant326541/AutumationMVP/issues/5

Bug tracking: https://github.com/sumant326541/AutumationMVP/projects/1

# Tast 2: Automation scenarios of my choice using 

https://www.saucedemo.com/.


## Solution: Automation Test script with BDD cucumber and Cypress

- Feature : Login Feature Test
    - Scenario:  Login With Valid Credential (Test data: standard_user, problem_user, performance_glitch_user)
         
    - Scenario: Login With blocked user (Testdata: locked_out_user)
- Feature : Add Products to Cart
    - Scenario:  Add products to cart

### Test Execution:

### added shorcut script command in package.json for different test execution  
```sh

scripts": {

    "all": "node_modules/.bin/cypress run",
    
    "chrome": "node_modules/.bin/cypress run --browser chrome",
    
    "firefox": "node_modules/.bin/cypress run --browser firefox",
    
    "docker": "docker run -it -v $PWD:/e2e -w /e2e cypress/included:6.2.1 --browser chrome",
    
    "headedless": "node_modules/.bin/cypress run --headless",
    
  }
  ```
  
### Docker container execution
#### Steps:
- start docker engine.
- clone source code from git https://github.com/sumant326541/AutumationMVP/tree/master
- run the below command from root directory.
```sh
docker run -it -v $PWD:/e2e -w /e2e cypress/included:6.2.1 --browser chrome
```
or run script

```sh
npm run docker
```

The above command will run the test case in headless chrome.
#### Explanation of the "docker run" command line arguments:
```sh
-it                  = interactive terminal
 -v $PWD:/e2e         = map current folder to /e2e inside the container
 -w /e2e              = set working directory to /e2e
 cypress/includes = run "cypress" command
    with arguments AFTER Docker image name
    In our case they are "--project ." to point globally installed Cypress.
    at the current working directory /e2e inside the container.
```
####  Local execution

Import project directory in any editor (prefered Visual stidio code) and open terminal then run command to install all plugins and dependencies mentioned in package.json file.
```sh
npm install 
```
Run all .feature files available
```sh
node_modules/.bin/cypress run
```
Run specific feature 
```sh
node_modules/.bin/cypress run --spec "/path/.feature"
```
Run test on chrome browser
```sh
node_modules/.bin/cypress run --browser chrome
```

Run test on firefox browser
```sh
node_modules/.bin/cypress run --browser firefox
```
Run test on cypress runner
open cypress runner with below command.
```sh
node_modules/.bin/cypress open
```
Tap on specific .feature file to be executed.


## Report 

- A json report will be generated in cucumber-jason folder after test execution.
### Export json report into html: 
- Run cucumber-html-report.js file which will convert json report into .html
```sh
 node cucumber-html-report.js
```
### html report generated
https://sumantreport.tiiny.site/

### Screen Recording
Screen recording will be generated in the videos folder.

Feature 1 : Login Feature Test

https://drive.google.com/file/d/1YxpeCkvlvfbY54bOc1NT7bn9Bh4wUpnh/view?usp=sharing

Feature 2 :Add products to cart

https://drive.google.com/file/d/1wl-X9SGJ4f63Bq5w2QT5oG5UlIuJME6L/view?usp=sharing

### ScreenShot
Screenshot of failed steps will be generated in the screenshots folder.
https://drive.google.com/file/d/1kzlj-fQKIE4Jvr2tKWOfzbQEkCx7ZTZn/view?usp=sharing

## Framework overview:

#### Page object Model
- Maintain each page locators and functionality in  a separate .js file available in "Pages" folder.
### BDD-cucumber:
- Integrated test case with BDD-cucumber.
- Created feature file and Step definition file in BDD directory.

### Custom command / reusability
- Created a commands.js file inside the support directory, and maintained all reusable functions.

### Override config propery value
- default value of Config parameter can be overriden  by updating value in cypress.json file.
### Test data
- I have parameterised test case using ScenerioOutline in feture file and executed same login scenerio with different set of dat
- Test data can be also used from a json file maintained inside fixture folder.
### Plugin
- external supported plugging can be added in index.js file present in plugins folder

### .gitignore
- prevent file to push into git repo. 

