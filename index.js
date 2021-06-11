const inquirer = require ("inquirer");

const fs = require("fs");

inquirer.registerPrompt("date", require("inquirer-date-prompt"));

inquirer.prompt([
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
    console.log(response);
    fs.writeFile("logs.json", JSON.stringify(response, null, '\t'),function(err){
        if (err) {
            return console.log(err)
          }
          console.log("Yay. It Worked!");
});
})


