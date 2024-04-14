#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const askUserName = async () => {
    const userName_ans = await inquirer.prompt({
        name: "user_name",
        type: "input",
        message: chalk.magentaBright("Enter your NAME"),
    });
    return userName_ans.user_name;
};
const userName = await askUserName();
console.log(chalk.yellowBright(`\n\t Welcome! "${userName}" in Currency Convertor:\n`));
let currency: any = {
	USD: 1,
	EUR: 0.91,
	GBP: 0.76,
	INR: 74.57,
	PKR: 280,
};

let user_answer = await inquirer.prompt(
	[
		{
			name: 'from',
			message: "Enter From Currency",
			type: 'list',
			choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
		},
		{
			name: 'to',
			message: "Enter To Currency",
			type: 'list',
			choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
		},
		{
			name: 'amount',
			message: "Enter From Amount",
			type: 'number',
		}
	]
)

let from_amount = currency[user_answer.from]
let to_amount = currency[user_answer.to]
let amount = user_answer.amount
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(converted_amount);