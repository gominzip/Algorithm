class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  peek() {
    return this.heap[0] || null;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].time <= this.heap[index].time) break;
      
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallest = index;

      if (leftChild < length && this.heap[leftChild].time < this.heap[smallest].time) {
        smallest = leftChild;
      }
      if (rightChild < length && this.heap[rightChild].time < this.heap[smallest].time) {
        smallest = rightChild;
      }
      if (smallest === index) break;

      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      index = smallest;
    }
  }
}

function solution(food_times, k) {
  let totalFoodTime = 0;
  const heap = new MinHeap();
  
  food_times.forEach((time, idx) => {
    totalFoodTime += time;
    heap.push({ time, idx: idx + 1 });
  });

  if (totalFoodTime <= k) return -1;

  let acc = 0;
  let prev = 0;
  let remainSize = heap.size();

  while (heap.size() > 0 && acc + (heap.peek().time - prev) * remainSize <= k) {
    const pick = heap.pop();
    acc += (pick.time - prev) * remainSize;
    remainSize--;
    prev = pick.time;
  }

  const restFoods = [];
  while (heap.size() > 0) {
    restFoods.push(heap.pop());
  }
  restFoods.sort((a, b) => a.idx - b.idx);

  return restFoods[(k - acc) % remainSize].idx;
}
