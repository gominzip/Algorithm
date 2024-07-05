const fs = require("fs");
let [[N, M], ground, ...orders] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

function solution(ground, orders) {
  // 차이배열
  let diff = new Array(N + 1).fill(0);

  orders.forEach(([start, end, change]) => {
    diff[start - 1] += change;
    if (end < N) {
      diff[end] -= change;
    }
  });

  let currentChange = 0;
  for (let i = 0; i < N; i++) {
    currentChange += diff[i];
    ground[i] += currentChange;
  }

  return ground.join(" ");
}

console.log(solution(ground, orders));