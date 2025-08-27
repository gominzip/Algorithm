const fs = require("fs");
let [N, K] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const circle = Array.from({ length: N }, (_, i) => i + 1);
let start = 0;
let out = [];

while (N > 0) {
  let next = (start + K - 1) % N;
  out.push(circle[next]);
  start = next;
  circle.splice(next, 1);
  N--;
}

console.log(`<${out.join(", ")}>`);
