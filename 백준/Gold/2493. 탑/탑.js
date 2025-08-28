const fs = require("fs");
let [N, inputs] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const out = new Array(+N).fill(0);
const towers = inputs.split(" ").map(Number);
const stack = [];
let top = -1;

for (let i = towers.length; i >= 0; i--) {
  while (top >= 0 && towers[stack[top]] <= towers[i]) {
    out[stack.pop()] = i + 1;
    top--;
  }
  stack.push([i]);
  top++;
}

console.log(out.join(" "));
