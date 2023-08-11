//These are the Imports
const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./examples/utils/generateLogo");
// all my inquirer questions
const questions = [
  {
    type: "input",
    name: "text",
    message: "TEXT: Enter up to (3) Characters:",
  },
  {
    type: "input",
    name: "textColor",
    message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose which Pixel Image you would like?",
    choices: ["circle", "square", "triangle"],
  },
];
//this prompts the questions and then generates a logo based on the users options
inquirer.prompt(questions).then(function (data) {
  const svgLogo = generateLogo(data);
  fs.writeFile("logo.svg", svgLogo, function (err) {
    if (err) {
      throw err;
    } else console.log("logo was generated");
  });
});
