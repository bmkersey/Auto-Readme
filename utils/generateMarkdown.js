// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'Apache 2.0 License') {
  return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  }
  
  if(license == 'Boost Software License 1.0') {
    return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
  }
  
  if(license == 'BSD 3-Clause License') {
    return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  }
  
  if(license == 'BSD 2-Clause License') {
    return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
  }
  
  if(license == 'GNU GPL v3') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  
  if(license == 'GNU GPL v2') {
    return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
  }
  
  if(license == 'GNU AGPL v3') {
    return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
  }
  
  if(license == 'GNU LGPL v3') {
    return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)';
  }
  
  if(license == 'The Unlicense') {
    return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
  }
  
  if(license == 'The MIT License') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }

  // Deafault to blank string if no license is selected
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'Apache 2.0 License') {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  
  if(license == 'Boost Software License 1.0') {
    return 'https://www.boost.org/LICENSE_1_0.txt';
  }
  
  if(license == 'BSD 3-Clause License') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  }
  
  if(license == 'BSD 2-Clause License') {
    return 'https://opensource.org/licenses/BSD-2-Clause';
  }
  
  if(license == 'GNU GPL v3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  
  if(license == 'GNU GPL v2') {
    return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
  }
  
  if(license == 'GNU AGPL v3') {
    return 'https://www.gnu.org/licenses/agpl-3.0';
  }
  
  if(license == 'GNU LGPL v3') {
    return 'https://www.gnu.org/licenses/lgpl-3.0';
  }
  
  if(license == 'The Unlicense') {
    return 'http://unlicense.org/';
  }
  
  if(license == 'The MIT License') {
    return 'https://opensource.org/licenses/MIT';
  }

  // Deafault to blank string if no license is selected
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    let licenseLink = renderLicenseLink(license);
  
    return `This project is covered under ${license}.  
  Please visit [${licenseLink}](${licenseLink}) to learn more.
  `}

  // Deafault to blank string if no license is selected
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let renderedBadge = "[" + licenseBadge + "](" + licenseLink + ")";
  let licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
  ${renderedBadge}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  ${licenseSection}
  ## Contribution
  ${data.contribute}
  
  ## Tests 
  ${data.tests}
  
  ## Questions
  If you have any questions about this project please reach out by Email or on GitHub!  
  Email: ${data.email}  
  GitHub: [${data.github}](https://github.com/${data.github})  
  
  `;
  
};


module.exports = generateMarkdown;
