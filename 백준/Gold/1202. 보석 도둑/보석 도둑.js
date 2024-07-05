const fs = require("fs");
const [[N, K], ...input] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input/1202.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const jewel = input.slice(0, N);
const bags = input.slice(N);

class MaxHeap {
  constructor() {
    this.heap = [];
  }
    
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapify(0);
    }
    return max;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) {
        break;
      }
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  heapify(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.heapify(largest);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }
}

function solution(N, K, jewel, bags) {
  // 무게 기준 오름차순 정렬
  jewel.sort((a, b) => a[0] - b[0]);
  bags.sort((a, b) => a - b);

  let total = 0;
  let possible = new MaxHeap();

  // 가방은 뒤로 갈수록 제한무게가 커지므로 이전 possible에 들어간 보석들도 넣을 수 있음
  for (let i = 0, j = 0; i < K; i++) {
    const bagLimit = bags[i][0];
    while (j < N && jewel[j][0] <= bagLimit) {
      possible.insert(jewel[j][1]); // 값을 우선순위 큐에 저장
      j++;
    }
    if (possible.size()) {
      // 현재 가능한 보석들 중 가장 비싼 것으로 더하기
      total += possible.pop();
    }
  }

  return total;
}

console.log(solution(N, K, jewel, bags));