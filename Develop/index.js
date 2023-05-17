const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
   .prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a detailed description of how your application works',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How can this application be installed?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please describe the usage of this application',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Choose a license',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Who helped make this application?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please input any tests you ran on this webpage',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please input a link to your github profile and enter your username' ,
        name: 'questions'
    },
    {
        type: 'input',
        message: 'Please enter your email address so users know where to get ahold of you for any questions about the application',
        name: 'questions',
    },
   ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
