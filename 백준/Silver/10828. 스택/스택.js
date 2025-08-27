const fs = require("fs");
let [_, ...ops] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let s = [];
const out = [];

for (const line of ops) {
  const [cmd, val] = line.split(" ");
  switch (cmd) {
    case "push":
      s.push(val);
      break;

    case "pop":
      out.push(s.length ? s.pop() : -1);
      break;

    case "size":
      out.push(s.length);
      break;

    case "empty":
      out.push(s.length ? 0 : 1);
      break;

    case "top":
      out.push(s.length ? s[s.length - 1] : -1);
      break;
  }
}

console.log(out.join("\n"));
