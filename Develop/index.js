// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the name of your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the purpose of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation steps.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide the path to a screenshot of your application and usage instructions',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license used on this project.',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter testing instructions.',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Provide the URL to access the deployed app and your GitHub page.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
