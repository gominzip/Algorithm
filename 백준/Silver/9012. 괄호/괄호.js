const fs = require("fs");
let [_, ...lines] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let out = [];
for (let ps of lines) {
  let isValid = true;

  if (ps.length % 2) out.push("NO");
  else {
    let temp = [];
    for (let p of ps) {
      if (p === "(") temp.push(p);
      else {
        if (!temp.length) {
          isValid = false;
          break;
        }
        temp.pop();
      }
    }
    if (!isValid || temp.length) out.push("NO");
    else out.push("YES");
  }
}

console.log(out.join("\n"));
