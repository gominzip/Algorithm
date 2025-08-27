const fs = require("fs");
let [_, ...ops] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let dqf = [];
let dqb = [];
const out = [];

for (const line of ops) {
  const [cmd, val] = line.split(" ");
  switch (cmd) {
    case "push_front":
      dqf.push(val);
      break;

    case "push_back":
      dqb.push(val);
      break;

    case "pop_front":
      if (dqf.length) out.push(dqf.pop());
      else if (dqb.length) out.push(dqb.shift());
      else out.push(-1);
      break;

    case "pop_back":
      if (dqb.length) out.push(dqb.pop());
      else if (dqf.length) out.push(dqf.shift());
      else out.push(-1);
      break;

    case "size":
      out.push(dqb.length + dqf.length);
      break;

    case "empty":
      out.push(dqb.length + dqf.length ? 0 : 1);
      break;

    case "front":
      if (dqf.length) out.push(dqf[dqf.length - 1]);
      else if (dqb.length) out.push(dqb[0]);
      else out.push(-1);
      break;

    case "back":
      if (dqb.length) out.push(dqb[dqb.length - 1]);
      else if (dqf.length) out.push(dqf[0]);
      else out.push(-1);
      break;
  }
}

console.log(out.join("\n"));
