const fs = require ("fs");
const inquirer = require("inquirer");
const util = require ("util");
inquirer.registerPrompt("date", require("inquirer-date-prompt"));
// const $root = document.querySelector("#root");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

function promptUser()  {
        return inquirer.prompt([
        {
            type: "number",
            name: "number"
        },
        {
            type: "date",
            name: "date"
        },
        {
            type: "input",
            message: "What coding logs do you have for today?",
            name: "input"
        }
    ]);
}

const generateHTML = function (logs)  {
  var logsDiv = $("#logs-section");

  for(const log of logs) {
      console.log(log);
      var newLog=$("<p>")
      newLog.text(log)
      logsDiv.append(newLog)
  }

}

// function generateHTML(logs) {

//     for (const log of logs) {
//         const number = log.number
//         const date = log.date
//         const input = log.input
//     }

//     return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" type="text/css" href="style.css">
//   <link rel="preconnect" href="https://fonts.gstatic.com">
//   <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet">
//   <title>Coding Logs at Sea</title>
// </head>
// <body>
//     <div class="container">
//     <div class="header-section">
//         <div class="name-section">
//             <h1 class="name">Kaitlyn Lynette</h1>
//             <h2>My Coding Logs at Sea</h2>
//         </div>
//     </div>
//     <div class="logs-section">
//         <p>${number}</p>
//         <p>${date}}</p>
//         <p>${input}</p>
//     </div>
//     </div>
// </body>
// </html>`
//   }


async function createLogs() {
    try {
        // const logs = []
        const fileStr = await readFileAsync("combinedLogs.json", "utf8");
        //This will store the existing data into logs
        const logs = JSON.parse(fileStr)
        //We prompt the user
        const answers = await promptUser();
        //Logs is an array already so we should only need to push the object into the array 
        logs.push(answers);
        //Writing the JSON file with the old and new data
        await writeFileAsync (
        "combinedLogs.json", 
        JSON.stringify(logs, null,2), 
        "utf8"
        )
        //Generate the html with the combined logs JSON 
        const html = generateHTML(logs)
        await appendFileAsync("index.html", html);

    } catch  (err) {
        console.log(err)
    }
}







createLogs();