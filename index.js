#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const number = Math.floor(Math.random() * 10);
console.log(chalk.bold.hex("#FA0093")("WELCOME TO NUMBER GUESSING GAME"));
const guess = await inquirer.prompt([{
        types: "number",
        name: "guessNumber",
        message: "Please Guess The Number Between 1-10 :"
    }]);
if (guess.guessNumber == number) {
    console.log(chalk.bold.italic.hex("#09F000")("Congratulations you guess the Correct Number"));
}
else {
    console.log(chalk.bold.italic.hex("#FF0B01")("Sorry you guess the Wrong Number"));
}
