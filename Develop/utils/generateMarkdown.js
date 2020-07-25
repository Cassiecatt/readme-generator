// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  //[here](# ${data.description})
  //add jump links for each section
  // example * [Installation](#installation) ?
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



