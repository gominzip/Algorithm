const fs = require("fs");
let [[N, M, L, K], ...infos] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let answer = Infinity;
for (let i = 0; i < K; i++) {
  for (let j = 0; j < K; j++) {
    let meteorCount = 0;
    const [sx, sy] = [Math.min(infos[i][0], infos[j][0]), Math.min(infos[i][1], infos[j][1])];
    for (const [x, y] of infos) {
      if (x < sx || x > sx + L || y < sy || y > sy + L) {
        meteorCount++;
      }
    }
    answer = Math.min(answer, meteorCount);
  }
}

console.log(answer);
