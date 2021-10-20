const mit = {
  name: 'MIT License',
  badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  link: '(https://opensource.org/licenses/MIT)'
};
const mozilla = {
  name: 'Mozilla Public License 2.0',
  badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  link: '(https://opensource.org/licenses/MPL-2.0)'
};
const isc = {
  name: 'ISC License (ISC)',
  badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
  link: '(https://opensource.org/licenses/ISC)'
};
const gnu = {
  name: 'GNU GPL v3',
  badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  link: '(https://www.gnu.org/licenses/gpl-3.0)'
};
const noLicense = {
  name: 'No License Provided',
  badge:'',
  link:''
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
  const licenseURL = answers.license
  
  return `
  ## ${answers.title}:
  [![License: ${answers.license}](https://img.shields.io/badge/License-${licenseURL()}-blue.svg)](https://opensource.org/licenses/${answers.license})

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

  ## Contact:
  https://github.com/${answers.github}/${answers.github}.github.io
  
  ${answers.email}


`;
}

module.exports = generateMarkdown; 

