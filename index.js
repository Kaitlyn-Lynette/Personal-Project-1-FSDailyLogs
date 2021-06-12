const inquirer = require ("inquirer");
const fs = require("fs");
const util = require("util");
// const { inherits } = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);
// const readFileAsync = util.promisify(fs.readFile);
let data = fs.readFileSync("logs.json");
let logs = JSON.parse(data);
// const appendFileAsync = util.promisify(fs.appendFile);
// const logsArr = [];

inquirer.registerPrompt("date", require("inquirer-date-prompt"));

//This function with prompt me with what I do each day 
// function promptMe() {
//     // const response = await inquirer.prompt([
//         return 
inquirer.prompt ([
        {
            type: "number",
            name: "log number"
        },
        {
            type: "date",
            name: "date"
        },
        {
            type: "input",
            message: "What coding logs do you have for today?",
            name: "input"
        },
    ]).then(function(response) {
        //Define data
        let newLogs = response
        console.log(response)
        //Adding new data to our object
        logs.push(newLogs)
        //Write to the JSON file 
        let addLogs = JSON.stringify(logs);
        fs.appendFile("logs.json", addLogs,(err) => {
            if(err) throw err;
            console.log ("New logs added")
        })
    })

// }
    // console.log(response);
    // fs.writeFile("logs.json", JSON.stringify(response, null, '\t'), function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log("Yay. It Worked!");
    // });

// function generateHTML(logs) {
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
//         <div class="date">
//             <p>The day at sea is ${logs.date}</p>
//         </div>
//         <div class="logs">
//             <p>${logs.input}</p>
//         </div>
//     </div>
//     </div>
// </body>
// </html>`;
// }


// async function init() {
//     console.log("this is working, stay calm")

//     try{
//         const logs = await promptMe();
//         // const html = generateHTML(logs);
//         // await writeFileAsync("index.html", html);
//         // await appendFileAsync("logs.json", JSON.stringify(logs, null, '\t'));
//         await readFileAsync("./logs.json",'utf-8',function (err,logs) ) {
//             if(err) throw err 

//             let arrayOfLogs = JSON.parse(data)
//             arrayOfLogs.logs.push({logs})
//         }
        
//         console.log("Successfuly wrote to index.html");
//     } catch (err) {
//         console.log(err);
//     }
// }

// init();
