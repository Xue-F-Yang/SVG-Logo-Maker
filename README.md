# SVG-Logo-Maker

## Description
The SVG Logo Maker is a command-line application designed to allow freelance web developers to create simple logos for their clients and projects without the need to engage a graphic designer. It utilizes inquirer to prompt the user within the command line for how they would like their logo to look, including the text to display (up to 3 characters in length), the color of that text, the shape of their logo (circle, square, or triangle), and the color of that shape. Once the user answers all prompts, an SVG file is written using their selections to generate a logo.

## Dependencies/Technology Used
* Inquirer 
* Jest
* Babel

## Installation
To install the SVG Logo Maker, follow these steps:
1. Clone the repository to your local machine: git clone https://github.com/Xue-F-Yang/SVG-Logo-Maker.git
2. Open the project in your preferred code editor.
3. Install the required dependencies using npm: npm install
4. Install Jest as a devDependency: npm install --save-dev jest

## Usage
To use the SVG Logo Maker, follow these steps:
* Change directories to the project folder in the terminal.
* Run the application by typing node index.js or using the script npm start in the terminal's command line.
* Answer a series of questions to customize your logo.
* Once all prompts have been answered with accepted values, your new logo will be generated with the file name 'logo.svg' in the 'examples' folder.

## Contributing
This project was created as a challenge assignment for the UofW Full Stack Boot Camp. Contributions, ideas, and requests are welcome. Please reach out to the project maintainers for any contributions.

## Test
![Alt text](test/testimage.jpg)

## Video
https://drive.google.com/file/d/1t9exxq_RuAChA0NE4rUB4B52UnQQiiyl/view