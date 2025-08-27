const fs = require("fs");
let str = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const out = new Set();
const ps = [];
let stack = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] === "(") {
    stack.push(i);
  } else if (str[i] === ")") {
    ps.push([stack.pop(), i]);
  }
}

function dfs(exclude, start) {
  if (exclude.size) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (!exclude.has(i)) newStr += str[i];
    }
    out.add(newStr);
  }

  for (let i = start; i < ps.length; i++) {
    let newExclude = [...exclude, ...ps[i]];
    dfs(new Set(newExclude), i + 1);
  }
}

dfs(new Set(), 0);

console.log([...out].sort().join("\n"));
