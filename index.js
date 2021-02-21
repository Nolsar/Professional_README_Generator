const inquirer = require('inquirer');

// A command-line application that accepts user input
inquirer
    // prompts for information about my application repository
    .prompt([
        {
            // title of my project
            name: 'projectTitle',
            message: 'What is your project title?',
        },
        // section: Description    

        // section: Table of Contents

        // WHEN I click on the links in the Table of Contents

        // THEN I am taken to the corresponding section of the README

        // section: Installation

        // section: Usage

        // section:License 

        // choose a license for my application from a list of options

        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

        // section:Contributing 

        // section:Tests 

        // section: Questions

        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

        // WHEN I enter my email address

        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    ])
    .then(answers => {
        console.info('Answers:', answers);
    });




