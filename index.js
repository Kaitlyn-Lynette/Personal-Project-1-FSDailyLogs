// const inquirer = require ("inquirer");
// const fs = require("fs");
// const util = require("util");
// inquirer.registerPrompt("date", require("inquirer-date-prompt"));


// // const readFileAsync = util.promisify(fs.readFile);
// // const appendFileAsync = util.promisify(fs.appendFile);
// // const writeFileAsync = util.promisify(fs.appendFile);

// //This function with prompt me with what I do each day 
// inquirer.prompt ([
//         {
//             type: "number",
//             name: "log number"
//         },
//         {
//             type: "date",
//             name: "date"
//         },
//         {
//             type: "input",
//             message: "What coding logs do you have for today?",
//             name: "input"
//         }
//     ]).then(function(response) {
//     // console.log(response);
//     const logsArr = new Array;
//     logsArr.push(response)
//     console.log(logsArr)
//     // console.log(logs);
//     fs.writeFile("logs.json", JSON.stringify(logsArr, null, '\t'), function(err){
//         if (err) {
//         return console.log(err)
//         }
//         console.log("Yay. It Worked!");
//     }); 
// })


const fs = require ("fs");
const inquirer = require("inquirer");
const util = require ("util");
inquirer.registerPrompt("date", require("inquirer-date-prompt"));

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser()  {
        return inquirer.prompt([
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
        }
    ]);
}


async function createLogs() {
    try {
        const logs = []
        const fileStr = await readFileAsync("combinedLogs.json", "utf8");
        logs.push(JSON.parse(fileStr))
        const answers = await promptUser();
        logs.push(answers);
        console.log(logs)

        await writeFileAsync (
        "combinedLogs.json", 
        JSON.stringify(logs, null,2), 
        "utf8"
        )
    } catch  (err) {
        console.log(err)
    }
}

createLogs();