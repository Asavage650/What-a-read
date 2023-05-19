function renderLicenseBadge(license) {
  return `![Project License](https://img.shields.io/badge/License-${license}-red)`;
}

function renderLicenseLink(license) {
  return `https://choosealicense.com/ ${license}`;
}

function renderLicenseSection(license) {
  return `${license}`;
}

function generateMarkdown(data) {
  return `# Title ${data.title}

${renderLicenseBadge(data.license)}  
## Decription
  ${data.description}
  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
## Installation
  ${data.installation}

## Usage
  ${data.usage}
  
## License
  ${data.license}
  
## Contributor
  ${data.contributors}
  
## Tests
  ${data.tests}
  
## Questions
  ${data.questions}  

`;
}

module.exports = generateMarkdown;
