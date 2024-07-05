const fs = require("fs");
const [N, K] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input/2225.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const MOD = 1000000000;

function findNum(target, count, total, memo) {
  if (count === 0) {
    return total === target ? 1 : 0;
  }

  // 이미 연산 결과가 있는 경우엔 해당 결과로 반환
  if (memo[count][total] !== -1) {
    return memo[count][total];
  }

  let result = 0;

  for (let i = 0; i <= target - total; i++) {
    result += findNum(target, count - 1, total + i, memo);
    result %= MOD;
  }
  memo[count][total] = result;
  return result;
}

function solution(N, K) {
  const memo = Array.from({ length: K + 1 }, () => Array(N + 1).fill(-1));
  return findNum(N, K, 0, memo);
}

console.log(solution(N, K));
