function renderLicenseBadge(licenseB) {
  return `![Project License](https://img.shields.io/badge/License-${licenseB}-red)`;
}

function renderLicenseLink(license) {
  return `https://choosealicense.com/ ${license}`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.licenseB)}  
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
