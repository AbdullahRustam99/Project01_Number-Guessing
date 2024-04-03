#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let trys = 3
let condition = true
console.log(chalk.bold.hex("#FA0093")("WELCOME TO NUMBER GUESSING GAME"));


while (trys >= 0) {
	const number: number = Math.floor(Math.random() * 9 + 1);

	const guess = await inquirer.prompt([{
		types: "number",
		name: "guessNumber",
		message: "Please Guess The Number Between 1-10 :"
	}]);

	if (guess.guessNumber == number) {
		console.log(chalk.bold.italic.hex("#09F000")("Congratulations you guess the Correct Number"));
		console.log(chalk.bold.italic.hex("#D3D600")(`You have ${trys} try left!!!`));
	} else {
		console.log(chalk.bold.italic.hex("#FF0B01")("Sorry you guess the Wrong Number"));
		console.log(chalk.bold.italic.hex("#D3D600")(`You have ${trys} try left!!!`));

	}
	trys--
}
while (condition) {
	let tryAgain = await inquirer.prompt([{
		type: "confirm",
		name: "try",
		message: "Do you want to play again",
		default: "false"
	}])
	condition = tryAgain.try
	if (condition == true) {
		let trys = 3
		while (trys >= 0) {
			const number: number = Math.floor(Math.random() * 9 + 1);

			const guess = await inquirer.prompt([{
				types: "number",
				name: "guessNumber",
				message: "Please Guess The Number Between 1-10 :"
			}]);

			if (guess.guessNumber == number) {
				console.log(chalk.bold.italic.hex("#09F000")("Congratulations you guess the Correct Number"));
				console.log(chalk.bold.italic.hex("#D3D600")(`You have ${trys} try left!!!`));

			} else {
				console.log(chalk.bold.italic.hex("#FF0B01")("Sorry you guess the Wrong Number"));
				console.log(chalk.bold.italic.hex("#D3D600")(`You have ${trys} try left!!!`));
			}
			trys--
		}
	} else {
		console.log(chalk.bold.hex("#E87800")("GoodBy Come Back Later"));

	}

}
