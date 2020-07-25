const inquirer = require('inquirer');
const fs = require('fs');

 //variable holding markdown file
 const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "github",
            message: "What is your Github username? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Github username!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "title",
            message: "What is your project's name? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your project's name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of your project (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a description of your project!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide steps required to install project!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide instructions and examples for use!");
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "license",
            message: "What kind of license should your project have (Required)",
            choices: ["NPM", "Github", "MIT", "APACHE-2.0", "None"],
        },
        {
            type: "input",
            name: "contributing",
            message: "Provide contribution guidelines for your application (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide contribution guidelines!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Provide examples on how to run tests for your application (Required)",
            default: "npm test",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide test examples on how to run your app!")
                    return false;
                }
            }
        }
    ]);
};

// function to write README file
function writeFile(fileName, data) {
    fs.writeFile('../projectREADME.md', data, (err) => {
        if (err) {
            console.log(err)
            return;
        } else {
            console.log("README successful");
        }
    });
};

// function to initialize program
function init() {
    questions().then(answers => writeFile("projectREADME.md", generateMarkdown(answers))
    );

}

// function call to initialize program
init();






