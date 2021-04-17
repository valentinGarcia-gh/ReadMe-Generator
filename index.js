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
        choices: ["Apache-2.0", "APSL-2.0", "ISC", "MIT"]
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }


// TODO: Create a function to initialize app
function init() { }

inquirer.prompt(arrayOfQuestions).then((answers) =>

    createReadMe(
        `
        # Title
            ${answers.projectTitle}

        ![License](${answers.licenseType})

        ## Table of Contents:
         - [Description](##Description)  
         - [Installation](##Installation)  
         - [Usage Information](##Usage Information)  
         - [Contributions](##Contributions)  
         - [Test Instructions](##Test Instructions)  
         - [Questions](##Questions)  

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

            // ${answers.description}
            Any questions? Please feel free to follow me on GitHub
            https://github.com/${answers.userName}

            Or drop me a message via email @
            ${answers.email}
        `
    )
);

function createReadMe(input) {
    fs.writeFile(`${'README'}.md`, input, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}

// Function call to initialize app
init();