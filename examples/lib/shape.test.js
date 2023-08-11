const Square = require("../lib/Square");
const Triangle = require("../lib/Triangle");
const Circle = require("../lib/Circle");

describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    let color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="160" cy="100" r="80" style="fill:${this.shapeColor}" />`
    );
  });
});

describe("Square", () => {
  test("renders correctly", () => {
    const shape = new Square();
    let color = "yellow";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect x="50" y="50" width="200" height="200" style="fill:${this.shapeColor}" />`
    );
  });
});

describe("Triangle", () => {
  test("renders correctly", () => {
    const shape = new Triangle();
    let color = "purple";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon points="150,50 50,150 250,150" style="fill:${this.shapeColor}" />`
    );
  });
});
