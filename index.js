// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const generateFile = require ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: questions[0],
        validate: titleInput =>{
            if (titleInput){
                return true;
            }else{
                console.log('Please enter a title!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: questions[1],
        validate: descriptionInput =>{
            if (descriptionInput){
                return true;
            }else{
                console.log('Please enter a description!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: questions[2],
        validate: installInput => {
            if (installInput){
                return true;
            }else{
                console.log('Please enter installation details!')
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: questions[3],
        validate: usageInput => {
            if (usageInput){
                return true;
            } else{
                console.log('Please enter usage details!');
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: questions[4],
        validate: contributeInput => {
            if (contributeInput){
                return true;
            } else{
                console.log('Please enter contribution details!');
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: questions[5],
        validate: testInput => {
            if (testInput){
                return true;
            } else{
                console.log('Please enter test details!');
            }
        }
    },
    {
        type: 'input',
        name: 'license',
        message: questions[6],
        validate: licenseInput => {
            if (licenseInput){
                return true;
            } else{
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license option for your project.',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'The MIT License', 'The Unlicense'],
        validate: licenseInput => {
            if (!licenseInput) {
                console.log('Please enter license information!');
                return false
            }
            return true;
        }
    }
];


// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log('Your readme has been generated!!')
    })
}

// TODO: Create a function to initialize app
const promptUser = () => {
    var answers = inquirer.prompt
    .then(answers =>{
        generateFile(answers)
    })
    .then(file =>{
        writeFile('readme.md', file)
    })
    
};

// Function call to initialize app
promptUser()
