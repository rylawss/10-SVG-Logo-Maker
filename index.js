const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape;
  }
}

async function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters?",
      },
      {
        type: "input",
        name: "textColor",
        message: "What is the color of the text?",
      },
      {
        type: "list",
        name: "shape",
        message: "What shape would you like?",
        choices: ["Circle", "Square", "Triangle"],
      },
      {
        type: "input",
        name: "backgroundColor",
        message: "What is the shape color?",
      },
    ])
    .then((answers) => {
      let userText = "";
      if (answers.text.length > 0 && answers.text.length <= 3) {
        userText = answers.text;
      } else {
        console.log("Enter up to 3 characters");
        return;
      }
      fontColor = answers.textColor;

      let chosenShape;
      switch (answers.shape) {
        case "Circle":
          chosenShape = new Circle();
          // console.log("Circle");
          break;
        case "Square":
          chosenShape = new Square();
          // console.log("Square");
          break;
        case "Triangle":
          chosenShape = new Triangle();
          // console.log("Triangle");
          break;
      }

      completedShape = chosenShape.render(answers.backgroundColor);

      let SVG = new Svg();
      SVG.setTextElement(userText, fontColor);
      SVG.setShapeElement(completedShape);

      const svgString = SVG.render();
      fs.writeFileSync(`logo.svg`, svgString.toString());
    });
}

init();
