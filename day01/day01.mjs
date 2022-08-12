import {readFileSync} from 'fs';

const contents = readFileSync("day01.txt", 'utf-8');
const nums = [];
for (const str of contents.split("\n")) {
	nums.push(parseInt(str));
}


// part 1
let curr = null;
let result = 0;

for (const num of nums) {
	if (curr !== null && num > curr) {
		result++;
	}
	curr = num
}

console.log("part 1:", result);


// part 2
curr = null;
result = 0;
let idx = 0
while (idx < nums.length - 3) {
	if (nums[idx + 3] > nums[idx]) {
		result++
	}
	idx++;
}

console.log("part 2:", result);