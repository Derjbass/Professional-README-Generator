// TODO: Include packages needed for this application
const genMark = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs')
const fName = 'README.md';

// TODO: Create an array of questions for user input
const questions = ['Type in the title of the project?: ', 'Type in a description of the project.: ', 'Type in the installation instructions.: ', 'Type in the usage information.: ', 'Type in the contribution guidelines.: ', 'Type in the test instructions.: ', 'Select which license to apply.: '];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMark(data), (err) => {
        err ? console.error(err) : console.log('Commit logged!')
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'test',
            message: questions[5]
        },
        {
            type: 'list',
            name: 'license',
            message: questions[6],
            choices: ['MIT', 'Apache', 'Unlicensed', 'No License']
        },
]).then((data) => {
    writeToFile(fName, data);
})
}

// Function call to initialize app
init();
