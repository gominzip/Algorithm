const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const [N, M, V] = input.shift();

function solution(N, M, V, input) {
  const tree = {};

  input.forEach(([a, b]) => {
    if (!tree[a]) tree[a] = [];
    if (!tree[b]) tree[b] = [];
    tree[a].push(b);
    tree[b].push(a);
  });

  // 다음 노드 정보를 오름차순 정렬
  for (let key in tree) {
    tree[key].sort((a, b) => a - b);
  }

  function dfs(start) {
    const stack = [start];
    const visited = Array(N + 1).fill(false);
    const result = [];

    while (stack.length) {
      const curr = stack.pop();
      if (!visited[curr]) {
        visited[curr] = true;
        result.push(curr);
        // 작은 것부터 탐색이 가능하도록
        if (tree[curr]) {
          for (let i = tree[curr].length - 1; i >= 0; i--) {
            const next = tree[curr][i];
            if (!visited[next]) {
              stack.push(next);
            }
          }
        }
      }
    }
    return result;
  }

  function bfs(start) {
    const queue = [start];
    const visited = Array(N + 1).fill(false);
    const result = [];

    visited[start] = true;
    while (queue.length) {
      const curr = queue.shift();
      result.push(curr);
      if (tree[curr]) {
        for (let next of tree[curr]) {
          if (!visited[next]) {
            visited[next] = true;
            queue.push(next);
          }
        }
      }
    }
    return result;
  }

  console.log(dfs(V).join(" "));
  console.log(bfs(V).join(" "));
}

solution(N, M, V, input);
