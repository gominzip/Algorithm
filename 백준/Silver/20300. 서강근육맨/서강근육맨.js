const fs = require("fs");
let [N, tLines] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

N = +N;
let t = tLines.split(" ").map(BigInt);
t.sort((a, b) => (a < b ? -1 : 1));

let answer = 0n;

if (N % 2 === 1) {
  answer = t.pop();
  N--;
}

for (let i = 0; i < N / 2; i++) {
  const pair = t[i] + t[N - 1 - i];
  if (pair > answer) answer = pair;
}

console.log(answer.toString());
