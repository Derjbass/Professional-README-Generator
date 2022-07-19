// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![MIT](https://img.shields.io/badge/license-MIT-green)'
    case 'Apache':
      return '![APACHE](https://img.shields.io/badge/license-Apache%202-blue)'
    case 'Unlicensed':
      return '![UNLICENSE](https://img.shields.io/badge/License-Unlicensed-lightgrey)'
    case 'No License':
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/'
    case 'Apache':
      return 'https://choosealicense.com/licenses/apache-2.0/'
    case 'Unlicensed':
      return 'https://choosealicense.com/licenses/unlicense/'
    case 'No License':
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return 'This application is covered under the MIT License.'
    case 'Apache':
      return 'This application is covered under the Apache License 2.0.'
    case 'Unlicensed':
      return 'This application is covered under The Unlicense.'
    case 'No License':
      return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\t\t${renderLicenseBadge(data.license)}
## Description\n${data.description}
## Table of Contents
--[Installation](#installation)\n
--[Usage](#usage)\n
--[Contribution](#contribution)\n
--[License](#license)\n
--[Test](#test)\n
--[Questions](#questions)\n
## Installation\n${data.installation}
## Usage\n${data.usage}
## Contribution\n${data.contribution}
## License\nlink: ${renderLicenseLink(data.license)}\n${renderLicenseSection(data.license)}
## Test\n${data.test}
## Questions\nGitHub: https://github.com/${data.userName}\nE-mail: ${data.email}

`;
}

module.exports = generateMarkdown;
