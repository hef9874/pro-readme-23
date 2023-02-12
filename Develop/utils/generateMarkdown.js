// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return "[![License: MIT]](https://opensource.org/licenses/MIT)";
    case "GNU":
      return "[![License: GPL v3]](https://www.gnu.org/licenses/gpl-3.0)";
    case "Eclipse Public License":
      return "[![License]](https://opensource.org/licenses/EPL-1.0)";
    case "IBM Public License":
      return "[![License: IPL 1.0]](https://opensource.org/licenses/IPL-1.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GNU":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "Eclipse Public License":
      return "https://opensource.org/licenses/EPL-1.0";
    case "IBM Public License":
      return "https://opensource.org/licenses/IPL-1.0";
    default: 
      return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseInput = renderLicenseLink(license);
  if(license === null || license === '') {
    return '';
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
