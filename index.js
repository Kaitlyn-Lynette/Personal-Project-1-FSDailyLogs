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
        // const logs = []
        const fileStr = await readFileAsync("combinedLogs.json", "utf8");
        //This will store the existing data into logs
        const logs = JSON.parse(fileStr)
        //We prompt the user
        const answers = await promptUser();
        //Logs is an array already so we should only need to push the object into the array 
        logs.push(answers);
        // console.log(logs)
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