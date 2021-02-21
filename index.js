const inquirer = require('inquirer');

// A command-line application that accepts user input
inquirer
    // prompts for information about my application repository
    .prompt([

        // title of my project
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project titled?',
        },

        // section: Description    
        {
            type: 'input',
            name: 'description',
            message: 'Briefly describe your project.',
        },

        // section: Table of Contents


        // WHEN I click on the links in the Table of Contents

        // THEN I am taken to the corresponding section of the README

        // section: Installation
        {
            type: 'input',
            name: 'install',
            message: 'What installations are required?',
        },

        // section: Usage
        {
            type: 'input',
            name: 'use',
            message: 'What is the use of the application?',
        },

        // section:License 
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose the license you would like to add for your project',
            choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib'],
        },

        // choose a license for my application from a list of options

        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

        // section:Contributing 
        {
            type: 'input',
            name: 'contributers',
            message: 'Are there any contribution rules?',
        },

        // section:Tests 
        {
            type: 'input',
            name: 'tests',
            message: 'Provide tests for project, and how to test, if applicable.',
        },

        // section: Questions
        // WHEN I enter my GitHub username
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GITHUB username?',
        },
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

        // WHEN I enter my email address
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },

        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    ])
    .then(answers => {
        console.info('Answers:', answers);
    });




