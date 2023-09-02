// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./lib/shapes.js');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'text',
    message: 'Enter upto 3 characters',
  },
  {
    type: 'input',
    name: 'color',
    message: 'Enter color',
  },
  {
    type: 'list',
    name: 'userShape',
    message: 'Enter shape',
    choices: ['circle', 'triangle', 'square']
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  /*inquirer
  .prompt(questions)
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });*/

  inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile('sample.svg', whichFunction({...answers}));/////not sure what to call?
  });

}

// Function call to initialize app
init();


module.exports  = questions;