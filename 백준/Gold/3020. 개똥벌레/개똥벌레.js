const fs = require("fs");
const [[N, H], ...obstacles] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input/3020.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

function solution(H, obstacles) {
  let diff = new Array(H + 1).fill(0);
  let crush = new Array(H).fill(0);

  obstacles.map((obstacle, idx) => {
    // 차이배열을 이용해 각 층별 장애물 변화량 구하기
    // 석순
    if (idx % 2) {
      diff[H - obstacle] += 1;
      diff[H] -= 1;
    } else {
      // 종유석
      diff[0] += 1;
      diff[obstacle] -= 1;
    }
  });

  let currentChange = 0;
  for (let i = 0; i < H; i++) {
    currentChange += diff[i];
    crush[i] += currentChange;
  }
  let minCrush = Math.min(...crush);
  let count = crush.filter((v) => v === minCrush).length;
  return `${minCrush} ${count}`;
}

console.log(solution(H, obstacles));