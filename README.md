#Automation MVP with BDD cucumber and Cypress

## Test Execution
####  Docker container execution
#### Steps:
- start docker engine.
- clone source code from git https://github.com/sumant326541/AutumationMVP/tree/master
- run the below command from root directory.
```sh
docker run -it -v $PWD:/e2e -w /e2e cypress/included:6.2.1 --browser chrome
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

Open project directory in terminal and run command to install all plugins and dependencies mentioned in package.json file.
```sh
npm install 
```
Run all .feature files available
```sh
cypress run
or
node_modules/.bin/cypress run
```
Run specific feature 
```sh
node_modules/.bin/cypress run --spec "/path/.feature"
```
Run test on chrome browser
```sh
cypress run --browser chrome
or
node_modules/.bin/cypress run --browser chrome
```

Run test on firefox browser
```sh
cypress run --browser firefox
or
node_modules/.bin/cypress run --browser firefox
```
Run test on cypress runner
open cypress runner with below command.
```sh
cypress open
or
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
- test data has been maintained nside fixture folder.
### Plugin
- external supported plugging can be added in index.js file present in plugins folder

