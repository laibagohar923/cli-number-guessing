#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10",
    },
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("congraulations! you gussed right number.");
}
else {
    console.log("you gussed wrong number");
}
