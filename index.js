// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const arrayOfQuestions = [
    {
        type: 'input',
        message: "Please enter the title for your project: ",
        name: "projectTitle",
    },
    {
        type: 'description',
        message: "Please enter a description for your project: ",
        name: "projectDescription",
    },
    {
        type: 'input',
        message: "What are the installation instructions for your project? ",
        name: "installationIns",
    },
    {
        type: 'input',
        message: "What is the usage information for your project? ",
        name: "usageInfo",
    },
    {
        type: 'input',
        message: "What are the contribution guidelines for this project? ",
        name: "contributions",
    },
    {
        type: 'input',
        message: "Please enter the test instructions: ",
        name: "testIns",
    },
    {
        type: 'list',
        message: "Please choose one of the following licenses: ",
        name: "licenseType",
        choices: ["Apache-2.0", "BSD-3-Clause", "ISC", "MIT"]
    },
    {
        type: 'input',
        message: "Please enter your GitHub username: ",
        name: "userName",
    },
    {
        type: 'input',
        message: "Please enter your email: ",
        name: "email",
    }
];
console.log(arrayOfQuestions)

// Function that renders licenses 
function licenseType (type){
    let licenseUrl = "";
    
    switch (type) {
        case "Apache-2.0":
            licenseUrl =  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"            
            break;
        case "BSD-3-Clause":
            licenseUrl =  "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"            
            break;
        case "ISC":
            licenseUrl =  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"            
            break;
        case "MIT":
            licenseUrl =  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"            
            break;
        default:
            licenseUrl =  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
            break;
    }
    return licenseUrl;
}

// Creates function to initialize app
function init() {

    inquirer.prompt(arrayOfQuestions).then((answers) =>

        createReadMe(
`
## Title
    ${answers.projectTitle}

${licenseType(answers.licenseType)}

## Table of Contents:
- [Description](#Description)  
- [Installation](#Installation)  
- [Usage Information](#UsageInformation)  
- [Contributions](#Contributions)  
- [Test Instructions](#TestInstructions)  
- [Questions](#Questions)  

## Description
        
    ${answers.projectDescription}

## Installation

    ${answers.installationIns}

## UsageInformation

    ${answers.usageInfo}

## Contributions

    ${answers.contributions}

## TestInstructions

    ${answers.testIns}

## Questions

    // ${answers.projectDescription}
    Any questions? Please feel free to follow me on GitHub
    https://github.com/${answers.userName}

    Or drop me a message via email @
    ${answers.email}
        `
        )
    );
}

// function that writes read me 
function createReadMe(input) {
    fs.writeFile("README.md", input, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}

// Function call to initialize app
init();