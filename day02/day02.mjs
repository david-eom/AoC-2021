import {readFileSync} from 'fs';

const contents = readFileSync("day02.txt", 'utf-8');
const movements = [];
for (const str of contents.split("\n")) {
	if (str === "") {
		continue;
	}
	const [dir, dist] = str.split(" ");
	movements.push([dir, parseInt(dist)])
}


// part 1
let horiz = 0;
let depth = 0;
for (const [dir, dist] of movements) {
	if (dir === "forward") {
		horiz = horiz + dist;
	} else if (dir === "down") {
		depth = depth + dist;
	} else { // dir === "up"
		depth = depth - dist;
	}
}
let result = horiz * depth;
console.log("part 1:", result);


// part 2
horiz = 0;
depth = 0;
let aim = 0;
for (const [dir, dist] of movements) {
	if (dir === "forward") {
		horiz = horiz + dist;
		depth = depth + aim * dist;
	} else if (dir === "down") {
		aim = aim + dist;
	} else { // dir === "up"
		aim = aim - dist;
	}
}
result = horiz * depth;
console.log("part 2:", result);
