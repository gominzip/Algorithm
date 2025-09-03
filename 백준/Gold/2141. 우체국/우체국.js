const fs = require("fs");
let [n, ...lines] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

n = Number(n);
let villages = [];
let total = 0;

for (let i = 0; i < n; i++) {
  let [xStr, aStr] = lines[i].split(" ");
  let x = Number(xStr);
  let a = Number(aStr);
  villages.push([x, a]);
  total += a;
}

villages.sort((a, b) => a[0] - b[0]);

let half = Math.ceil(total / 2);
let sum = 0;

for (let [x, a] of villages) {
  sum += a;
  if (sum >= half) {
    console.log(x);
    break;
  }
}
