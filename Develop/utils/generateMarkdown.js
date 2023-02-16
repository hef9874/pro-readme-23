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


//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
## Description
${data.description}
## How to Use This Application:
${data.install}
## Usage
![screenshot](${data.usage})
##License
${renderLicenseBadge(data.license)}
## Testing
${data.testing}
## Deployed Application URL
${data.link};
`;
}


module.exports = generateMarkdown;
