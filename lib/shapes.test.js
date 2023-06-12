const { Circle, Square, Triangle, Color } = require("./shapes.js");

test("Circle should render correctly", () => {
  const circle = new Circle();
  const expected = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red" />`;
  expect(circle.render("red")).toBe(expected);
});
test("Square should render correctly", () => {
  const square = new Square();
  const expected = `<rect x="50" height="200" width="200" fill="blue" />`;
  expect(square.render("blue")).toBe(expected);
});
test("Triangle should render correctly", () => {
  const triangle = new Triangle();
  const expected = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="green" />`;
  expect(triangle.render("green")).toBe(expected);
});
