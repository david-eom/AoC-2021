import {readFileSync} from 'fs';

const contents = readFileSync("day03.txt", 'utf-8');
const numbers = [];

for (const str of contents.split("\n")) {
	numbers.push(str);
}

// part 1
const len = numbers[0].length
let gamma = "";
let epsilon = "";
for (let idx = 0; idx < len; idx++) {
	let ones = 0;
	let zeros = 0;
	for (const number of numbers) {
		if (number.charAt(idx) === "1") {
			ones++;
		} else {
			zeros++;
		}
	}
	if (ones > zeros) {
		gamma += "1";
		epsilon += "0";
	} else {
		gamma += "0";
		epsilon += "1";
	}
}

let result = parseInt(gamma, 2) * parseInt(epsilon, 2);
console.log("part 1:", result);


// part 2
let frontier = [];
let newFrontier = [];

// O2
let O2idx = 0;
frontier = [...numbers];
while (frontier.length > 1) {
	newFrontier = [];
	let ones = 0;
	let zeros = 0;
	for (const num of frontier) {
		if (num.charAt(O2idx) === "1") {
			ones++;
		} else {
			zeros++;
		}
	}
	const bit = ones >= zeros ? "1" : "0";
	for (const num of frontier) {
		if (num.charAt(O2idx) !== bit) {
			continue;
		}
		newFrontier.push(num);
	}
	O2idx++;
	frontier = newFrontier;
}
const O2Rating = frontier[0];

// CO2
let CO2idx = 0;
frontier = [...numbers];
while (frontier.length > 1) {
	newFrontier = [];
	let ones = 0;
	let zeros = 0;
	for (const num of frontier) {
		if (num.charAt(CO2idx) === "1") {
			ones++;
		} else {
			zeros++;
		}
	}
	const bit = ones >= zeros ? "0" : "1";
	for (const num of frontier) {
		if (num.charAt(CO2idx) !== bit) {
			continue;
		}
		newFrontier.push(num);
	}
	CO2idx++;
	frontier = newFrontier;
}
const CO2Rating = frontier[0];

result = parseInt(O2Rating, 2) * parseInt(CO2Rating, 2);
console.log(O2Rating, CO2Rating);
console.log("part 2:", result);
