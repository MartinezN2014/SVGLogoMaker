const Shapes = require("./shapes");
//class of square that extends shapes
class Square extends Shapes {
  //constructor that takes in shape color text and text color
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<rect x="50" y="50" width="200" height="200" style="fill:${this.shapeColor}" />`;
  }
  renderSvg() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
     ${this.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
        this.textColor
      }">${this.text}</text></svg>`;
  }
}
module.exports = Square;
