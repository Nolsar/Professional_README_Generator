const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const apache = "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).";
const gnu    = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
const mit    = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
const isc    = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";

// A command-line application that accepts user input & prompts for information about my application repository
function promptUser() {
    return inquirer.prompt([

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
        // choose a license for my application from a list of options
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose the license you would like to add for your project',
            choices: [
                'afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib'],
        },

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
        }
    ])
    //    .then(answers => {
    //         console.info('Answers:', answers);
    //     });
};


// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// let licenseIcon = answers.license;
// let icon = `![](https://img.shields.io/badge/license-${licenseIcon}-9cf`;
// generateREADME.push(licenseIcon);


// professional README.md is generated with Table of Contents
// WHEN I click on the links in the Table of Contents, THEN I am taken to the corresponding section of the README
function generateREADME(answers) {
    return `# ${answers.projectTitle}
    1. [Project Description](#project-description)
    2. [Installation Instructions](#installation-instructions)
    3. [Usage Information](#usage-information)
    4. [Contributor Guidelines](#contributor-guidelines)
    5. [Code of Conduct](#code-of-conduct)
    6. [Test Instructions](#test-instructions)
    7. [License](#license)
    8. [Questions](#questions)

    ## Project Description
    * ${answers.description}

    ## Installation Instructions
    * ${answers.install}

    ## Usage Information
    * ${answers.use}

    ## Contributor Guidelines
    * ${answers.contributers}

    ## Code of Conduct
    * [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

    ## Test Instructions
    * ${answers.tests}

    ## License
    * licensed under ${answers.license}

    ## Questions
    * For additional help or questions about collaboration, please reach out to ${answers.email}
    * Follow me on Github at [${answers.githubUsername}] (http://github.com/${answers.githubUsername})`;
}


//writes file to generated-README.md
promptUser()
    .then(function (answers) {
        const README = generateREADME(answers);

        return writeFileAsync('generated-README.md', README);
    })
    .then(function () {
        console.log("generated-README.md has been created!");
    })
    .catch(function (err) {
        console.log(err);
    });





