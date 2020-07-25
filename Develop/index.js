const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
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
            type: "input",
            name: "license",
            message: "Provide a license (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide a license");
                    return false;
                }
            }
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
questions().then(answers => console.log(answers));

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
