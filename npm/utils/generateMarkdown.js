const mozilla = {
  name: 'Mozilla Public License 2.0',
  badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  link: '(https://opensource.org/licenses/MPL-2.0)'
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/*function renderLicenseBadge(license) {
  return `${license.badge}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  ${renderLicenseLink()}
};
*/
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  //const licenseURL = answers.license
  
  return `
  ## ${answers.title}:
  [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

  ## Description:
  ${answers.description}


  ## Installation:
  ${answers.installation}


  ## Usage:
  ${answers.usage}

  ## Contribution:
  ${answers.contribution}

  ## Testing:
  ${answers.testing}

  ## License:
  ${answers.license}
  https://opensource.org/licenses/${answers.license}

  ## Questions:
  https://github.com/${answers.github}/${answers.github}.github.io
  
  ${answers.email}


`;
}

module.exports = generateMarkdown; 

