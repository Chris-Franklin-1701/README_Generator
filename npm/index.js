// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [{
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
            name: 'license',
            choices: ['MIT', 'MPL-2.0', 'ISC', 'gpl-3.0']
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your e-mail address?',
            name: 'email'
        }];

        inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile(answers);
        });

//const license = data.choices;
//console.log(license);

//    module.exports = {
//        license,
//    };
// TODO: Create a function to write README file
function writeToFile(answers) {
    const filename = ("./output/README.md");
    let steve = generateMarkdown(answers);


    fs.writeFile(`${filename}`, steve, (err) => {
        err ? console.error(err) : console.log("success!!");
    });
};

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
