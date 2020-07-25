// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/license-${data.license}-blue.svg)
  * Github: ${data.github}
  * Questions? Email ${data.email}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
`;
}

// console.log(generateMarkdown())

module.exports = generateMarkdown;



