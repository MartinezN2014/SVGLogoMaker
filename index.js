//These are the Imports
const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./examples/utils/generateLogo");
// Defines a Svg class that has a constructor with three methods for rendering and setting the text and shape elements in the SVG string.

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {}
}

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

inquirer.prompt(questions).then(function (data) {
  const svgLogo = generateLogo(data);
  fs.writeFile("logo.svg", svgLogo, function (err) {
    if (err) {
      throw err;
    } else console.log("logo was generated");
  });
});
