const fs = require("fs");
let [firstLine, ...lines] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [_, K] = firstLine.split(" ").map(Number);
const wv = lines.map((l) => l.split(" ").map(Number));

function solution(K, wv) {
  const dp = new Array(K + 1).fill(0);
  for (let [w, v] of wv) {
    for (let k = K; k >= w; k--) {
      // dp[k-w]: 물건을 넣기 전에 남은 공간에서의 최대가치
      // dp[k-w]+v: 새 물건을 넣었을 때의 가치
      dp[k] = Math.max(dp[k], dp[k - w] + v);
    }
  }
  return dp[K];
}

console.log(solution(K, wv));