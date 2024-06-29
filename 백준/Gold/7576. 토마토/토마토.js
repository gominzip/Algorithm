const fs = require("fs");
const [[M, N], ...box] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

function solution(M, N, box) {
  let day = 0;
  let unripeTomatoCount = 0;
  let ripeTomatoes = [];

  // 익은 토마토 기본 세팅
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (box[y][x] === 1) {
        ripeTomatoes.push([y, x]);
      } else if (box[y][x] === 0) {
        unripeTomatoCount++;
      }
    }
  }
  // 초기에 익은 토마트 자체가 없는 경우
  if (!ripeTomatoes.length) return -1;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (ripeTomatoes.length) {
    const newRipe = []; // 새로익은 토마토 위치 저장
    // 현재 날짜에 익어 있는 토마토 순회
    for (let i = 0; i < ripeTomatoes.length; i++) {
      const [cy, cx] = ripeTomatoes[i];
      for (let j = 0; j < directions.length; j++) {
        const [dy, dx] = directions[j];
        const ny = cy + dy;
        const nx = cx + dx;
        if (ny >= 0 && ny < N && nx >= 0 && nx < M && box[ny][nx] === 0) {
          box[ny][nx] = 1;
          newRipe.push([ny, nx]);
          unripeTomatoCount--;
        }
      }
    }
    // 새로 익은 토마토가 없을 시
    if (newRipe.length === 0) break;
    ripeTomatoes = newRipe;
    day++;
  }

  if (unripeTomatoCount) return -1; // 안 익은 토마토가 남아있을 시
  return day;
}

console.log(solution(M, N, box));