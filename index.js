//prompts for: text up to 3 char, text color, background color, shape,
const inquirer = require("inquirer");
const fs = require("fs");

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
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "backgroundColor",
      message: "What is the shape color?",
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
