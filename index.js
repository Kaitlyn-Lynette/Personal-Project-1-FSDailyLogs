const inquirer = require ("inquirer");
const fs = require("fs");
const util = require("util");
// const { inherits } = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer.registerPrompt("date", require("inquirer-date-prompt"));

//This function with prompt me with what I do each day 
function promptMe() {
    // const response = await inquirer.prompt([
        return inquirer.prompt ([
        {
            type: "date",
            name: "date"
        },
        {
            type: "input",
            message: "What coding logs do you have for today?",
            name: "input"
        },
    ]);
}
// }
    // console.log(response);
    // fs.writeFile("logs.json", JSON.stringify(response, null, '\t'), function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log("Yay. It Worked!");
    // });

function generateHTML(logs) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Coding Logs at Sea</title>
</head>
<body>
    <div class="container">
    <div class="header-section">
        <div class="name-section">
            <h1>Kaitlyn Lynette</h1>
            <h2>My Coding Logs at Sea</h2>
        </div>
    </div>
    <div class="logs-section">
        <div class="date">
            <p>The day at sea is ${logs.date}</p>
        </div>
        <div class="logs">
            <p>${logs.input}</p>
        </div>
    </div>
    </div>
</body>
</html>`;
}


async function init() {
    console.log("this is working, stay calm")

    try{
        const logs = await promptMe();

        const html = generateHTML(logs);

        await writeFileAsync("index.html", html);
        await writeFileAsync("logs.json", JSON.stringify(logs, null, '\t'));
      
        console.log("Successfuly wrote to index.html");
    } catch (err) {
        console.log(err);
    }
}

init();
