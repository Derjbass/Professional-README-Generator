// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n## Description\n\n${data.description}\n\n## Table of Contents\n\n(put table of contents data here later)\n\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n## Contribution\n\n${data.contribution}\n\n## License\n\n (license info here)\n\n## Test\n\n${data.test}

`;
}

module.exports = generateMarkdown;
