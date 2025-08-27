const fs = require("fs");
let [_, ...ops] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let q = [];
let f = 0;
const out = [];

for (const line of ops) {
  const [cmd, val] = line.split(" ");
  switch (cmd) {
    case "push":
      q.push(val);
      break;

    case "pop":
      out.push(f < q.length ? q[f++] : -1);
      break;

    case "size":
      out.push(q.length - f);
      break;

    case "empty":
      out.push(f >= q.length ? 1 : 0);
      break;

    case "front":
      out.push(f < q.length ? q[f] : -1);
      break;

    case "back":
      out.push(f < q.length ? q[q.length - 1] : -1);
      break;
  }
}

console.log(out.join("\n"));
