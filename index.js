// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const generateFile = require ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
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
        message: 'Please enter a detailed description.',
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
        message: 'Please list install directions.',
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
        message: 'Please enter usage information for your project.',
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
        message: 'Please enter contribution guidelines for your project.',
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
        name: 'tests',
        message: 'Please enter instructions for testing for your project.',
        validate: testInput => {
            if (testInput){
                return true;
            } else{
                console.log('Please enter test details!');
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
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (!githubInput) {
                console.log('Please enter your GitHub username!');
                return false
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (!emailInput) {
                console.log('Please enter your email!');
                return false
            }
            return true;
        }
    }
];


// TODO: Create a function to write README file
const writeFile = file =>{
    return new Promise((resolve, reject)=>{
        fs.writeFile('./dist/README.md', file, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
    
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const promptUser = () => {
    inquirer.prompt(questions)
    .then(answers =>{
        return generateFile(answers);
    })
    .then(file =>{
        console.log('File created! Check the dist folder for output!')
        return writeFile(file);
        
    })
    .catch(err =>{
        if (err){
            throw err;
        }
    })
    
};

// Function call to initialize app
promptUser()
