const fs = require("fs");
let lines = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, k] = lines[0].split(" ").map(Number);
let number = lines[1];

const stack = [];
stack.push(number[0]);

let top = 0;

for (let i = 1; i < n; i++) {
  while (top > -1 && stack[top] < number[i] && k > 0) {
    stack.pop();
    k--;
    top--;
  }
  stack.push(number[i]);
  top++;
}

let answer = stack.join("");
if (k > 0) answer = answer.slice(0, stack.length - k);

console.log(answer);
