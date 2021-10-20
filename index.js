// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
//const questions = []
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title for your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please provide a description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the installation instructions for your project?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Please provide any usage information for your project.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Please provide the contribution guidelines you would like for your project.',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Please provide any testing instructions to test your project.',
            name: 'testing'
        },
        {
            type: 'checkbox',
            message: 'Which license(s) would you like to use with your project?',
            choices: ['MIT', 'Mozilla', 'ISC', 'GNU']
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'GitHub'
        },
        {
            type: 'input',
            message: 'What is your e-mail address?',
            name: 'e-mail'
        },
    ])
        .then((data) => {
            const fileName = 'README'
            fs.writeFile(`${fileName}.txt`, JSON.stringify(data, null, 4), (err) => {
                err ? console.error(err) : console.log("success!");
            });
        });
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
