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
  return `# ${data.title}\t${renderLicenseBadge(data.license)}\n\n## Description\n\n${data.description}\n\n## Table of Contents\n\n(put table of contents data here later)\n\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n## Contribution\n\n${data.contribution}\n\n## License\n\nlink: ${renderLicenseLink(data.license)}\n\n${renderLicenseSection(data.license)}\n\n## Test\n\n${data.test}\n\n ## Questions\n\nGitHub: https://github.com/${data.userName}\n\nE-mail: ${data.email}

`;
}

module.exports = generateMarkdown;
