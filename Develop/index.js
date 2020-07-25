const inquirer = require('inquirer');
const fs = require('fs');

 //variable holding markdown file
 const markDown = require('./utils/generateMarkdown');

// array of questions for user
const questions = () => {
    return inquirer.prompt ([
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
                    console.log("Provide steps required to install project!");
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
            choices: ["NPM", "Github", "None"]
        },
        {
            type: "input",
            name: "contributing",
            message: "Provide contribution guidelines for your application (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide contributoin guidelines!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Provide tests for your application and examples on how to run them (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide tests for your application")
                    return false;
                }
            }
        }
    ]);
};

// function to write README file
// need to update
function writeFile(fileName, data) {
    fs.writeFile('../README.md', data, (err) => {
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
    questions().then(answers => writeFile("README.md", markDown(answers))
    );

}

// function call to initialize program
init();






