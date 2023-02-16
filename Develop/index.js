// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user input
function questionsAnswers() {
let response = "";
inquirer.prompt( [
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
        type: 'list',
        name: 'license',
        message: 'Select a license used on this project.',
        choices: ['MIT', 'GNU','Eclipse Public License','IBM Public License'],
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
])
    .then(data => {
        writeToFile("README.md", data)
    });
    return response;
}

// a function to write README file
function writeToFile(fileName, data) {
    // let answers = [data.title, data.description, data.install, data.usage, data.license, data.tesing, data.link];

    let resultsFile = generateMarkdown(data);

    fs.writeFile(fileName, resultsFile, (error) =>
       error ? console.log(error) : console.log('Completed!')
        )
}

//a function to initialize app
function init() {
    questionsAnswers();
}

// Function call to initialize app
init();
