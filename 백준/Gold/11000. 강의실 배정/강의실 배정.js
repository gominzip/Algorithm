const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const starts = [];
const ends = [];

for (let i = 1; i <= N; i++) {
  const [s, e] = input[i].split(" ").map(Number);
  starts.push(s);
  ends.push(e);
}

starts.sort((a, b) => a - b);
ends.sort((a, b) => a - b);

let i = 0,
  j = 0;
let cur = 0,
  answer = 0;

while (i < N && j < N) {
  if (starts[i] < ends[j]) {
    cur++;
    answer = Math.max(answer, cur);
    i++;
  } else {
    cur--;
    j++;
  }
}

console.log(answer);
