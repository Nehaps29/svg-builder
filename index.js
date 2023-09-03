// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'text',
    message: 'Enter upto 3 characters',
  },
  {
    type: 'input',
    name: 'textcolor',
    message: 'Enter text color',
  },
  {
    type: 'input',
    name: 'color',
    message: 'Enter shape color',
  },
  {
    type: 'list',
    name: 'userShape',
    message: 'Enter shape',
    choices: ['circle', 'triangle', 'square']
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${data.render()}
  ${data.textRender()} </svg>`
  return fs.writeFileSync(path.join(process.cwd(), fileName), svgString);
}

// TODO: Create a function to initialize app
function init() {

  inquirer
  .prompt(questions)
  .then((answers) => {
    let shapeObj = '';
    if (answers.userShape === 'circle'){
      shapeObj = new Circle (answers.color,answers.text, answers.textcolor);
    }
    else if (answers.userShape === 'triangle'){
      shapeObj = new Triangle (answers.color,answers.text, answers.textcolor);
   }
   else if (answers.userShape === 'square'){
      shapeObj = new Square (answers.color,answers.text, answers.textcolor);
   }
   else {
    console.log("Please select valid shape");
   }
   console.log(shapeObj);
   writeToFile('sample.svg', shapeObj);
  });

}

// Function call to initialize app
init();


module.exports  = questions;