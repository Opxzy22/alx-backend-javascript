readline = require('readline')

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Welcome to Holberton School, what is your name?");

reader.on('line', (input) => {
	console.log(`Your name is: ${input}`);

	reader.close();
});

reader.on('close', () => {
	console.log("This important software is now closing");
});

