//class of shapes with a constructor of shapecolor text and text color
class Shapes {
  //these methods set the color of the shapes the text and the text color inputed by the user
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  setColor(color) {
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
}

module.exports = Shapes;
