const fs = require("fs");
let N = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let numbers = Array.from({ length: +N }, (_, i) => i + 1);

let n = 4;
while (numbers.length > 1) {
  let rest = [];
  let last = null;

  for (let i = 0; i < numbers.length; i++) {
    if (i % 2) rest.push(numbers[i]);
    else if (i === numbers.length - 1) last = numbers[i];
  }

  numbers = last ? [last, ...rest] : [...rest];
  rest = n--;
}

console.log(numbers[0]);
