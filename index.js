// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const generateFile = require ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "Please enter a detailed description of your project:", "Please enter how to install:", "Enter an overview of usage:", "Enter how to contribute:", "Please enter test instructions:", ""];

// TODO: Create a function to write README file
const writeFile = fileContent =>{
    return new Promise((resolve, reject)=>{
        fs.writeFile('./dist/readme.txt', fileContent, err => {
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
    return inquirer.prompt([
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
                    return false;
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
                    return false;
                }
            }
        },{
            type: 'input',
            name: 'test',
            message: questions[5],
            validate: testInput => {
                if (testInput){
                    return true;
                } else{
                    return false;
                }
            }
        }
    ]);
    
};

// Function call to initialize app
promptUser()
    .then(readmeData =>{
        return generateFile(readmeData);
    })
    .then(fileContent => {
        return writeFile(fileContent);
    })
    .then(writeFileResponse =>{
        console.log(writeFileResponse);
    })
    .catch(err =>{
        console.log(err);
    })
    
