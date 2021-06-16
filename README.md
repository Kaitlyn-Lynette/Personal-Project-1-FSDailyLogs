# FSDailyLogs

Created a command-line application that dynamically generates a JSON file from a user's input. The application will be invoked with the following command:

node index.js 

The user will be prompted for their log number, to confirm the date, and will have an opportunity to explain what coding related work they've done for the day. The 
JSON will be populated with the answers in the form of an object that is populating an array so that the a JSON of objects within an array is created. 

# Idea Generation 

The idea for this project came from my own pencil and paper recordings of my coding work. I wanted the computer to instead ask me and for these logs to be saved in one
place. 

# How it was built

Inquirer NPM - Prompt user with questions using command line  
fs.readFile - Reads the .JSON before writing with new data  
fs.writeFile - Write the .SON with the existing data captured from readFile and adds new data  
JSON.parse - Parses data once the .JSON file is read with existing data  
JSON.stringify - After new data is captured and added to the JSON  
ASYNC/AWAIT - To control the order of events firing, desired action:
  * Run index.js
  * Prompt User
  * Read existing JSON file 
  * Push new user response to the array of existing responses 
  * Generate HTML 

HTML 

JQuery to use AJAX to retrieve the JSON file so that we could loop through and generate the HTML

https://kaitlyn-lynette.github.io/FSDailyLogs/
