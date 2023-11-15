// Import required modules
import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Square, Triangle } from './lib/shapes.js'; // Import the Circle, Square, and Triangle classes

// Define the questions for user input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (input) => input.length <= 3,
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color hexadecimal or keyword:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color hexadecimal or keyword:',
  },
];

// Prompt user for input
inquirer
  .prompt(questions)
  .then((answers) => {
    let shape;
    const text = {
      // Define text properties
      render: function() {
        return `<text x="150" y="130" text-anchor="middle" fill="${answers.textColor}" font-size="35">${answers.text.toUpperCase()}</text>`;
      },
    };

    // Create the selected shape based on user input
    switch (answers.shape) {
      case 'Circle':
        shape = new Circle(150, 115, 55);
        break;
      case 'Triangle':
        shape = new Triangle(150, 115, 150);
        break;
      case 'Square':
        shape = new Square(150, 115, 100);
        break;
    }

    // Create the SVG logo
    const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shape.render(answers.shapeColor)}${text.render()}</svg>`;

    // Write the SVG logo to a file
    fs.writeFileSync('logo.svg', svgData);
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error(error);
  });