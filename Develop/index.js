const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the title of your application?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Please write a detailed description of how your application works",
    name: "description",
  },
  {
    type: "input",
    message: "What needs to be installed to run this code?",
    name: "installation",
  },
  {
    type: "input",
    message: "Please describe the usage of this application",
    name: "usage",
  },
  {
    type: "input",
    message: "Choose a license",
    name: "licenseB",
    options: ["MIT", "APACHI 2.0", "None"],
  },
  {
    type: "input",
    message: "What is this project licensed under?",
    name: "license",
  },
  {
    type: "input",
    message: "Who helped make this application?",
    name: "contributors",
  },
  {
    type: "input",
    message: "What command would the user input to run a test?",
    name: "tests",
  },
  {
    type: "input",
    message:
      "Please input a link to your github profile and enter your username",
    name: "questions",
  },
  {
    type: "input",
    message:
      "Please enter your email address so users know where to get ahold of you for any questions about the application",
    name: "questions",
  },
];

function writeToFile(fileName, data) {
  fs.writeFileSync("./Output/" + fileName + ".md", data);
  console.log("File written!");
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const markDown = generateMarkdown(answers);
    console.log(markDown);
    writeToFile("readme", markDown);
  });
}

init();
