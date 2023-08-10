//class of shapes with a constructor of color
class Shapes {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

//Defines a class of color with an extend of Shapes that creates an SVG circle
class Circle extends Shapes {
  render() {
    return;
    `<circle cx="25" cy="75" r="20" height="100%" width="100%" fill="${this.color}">`;
  }
}

//Defines a class of Square with an extend of Shapes that renders an SVG Square
class Square extends Shapes {
  render() {
    return;
    `<rect x="50" height="200" width="200" fill="${this.color}">`;
  }
}

//Defines a class of Triangle with an extend of Shapes that renders an SVG Triangle
class Triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`;
  }
}

module.exports = { Circle, Square, Triangle };
