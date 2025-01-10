const fs = require("fs");
let [_, nums] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

nums = nums.split(" ").map(Number);

function solution(nums) {
  // i번째 상자를 마지막으로 했을 때 넣을 수 있는 상자의 최대 개수
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 이전 박스들과 비교. 현재가 더 큰 박스인 경우 이전 박스를 넣을 수 있으므로 +1
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(solution(nums));
