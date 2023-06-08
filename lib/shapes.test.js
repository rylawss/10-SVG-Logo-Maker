require;
import { circle, square, triangle, color } from "./shapes.js";

test("Circle should render correctly", () => {
  const circle = new Circle(0, 0, 50);
  const expected = '<circle cx="0" cy="0" r="50" />';
  expect(circle.render()).toBe(expected);
});
