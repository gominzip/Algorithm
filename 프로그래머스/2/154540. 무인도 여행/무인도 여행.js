function findIsland(maps, cy, cx, visited) {
    let stack = [[cy, cx]];
    let total = 0;
    // 스택으로 탐색, 방문한 곳은 표시
    while (stack.length > 0) {
        let [y, x] = stack.pop();
        if (!visited[y][x] && maps[y][x] !== 'X') {
            total += parseInt(maps[y][x]);
            visited[y][x] = true;

            for (let [dy, dx] of [[y + 1, x], [y - 1, x], [y, x + 1], [y, x - 1]]) {
                if (dx >= 0 && dx < maps[0].length && dy >= 0 && dy < maps.length && !visited[dy][dx]) {
                    stack.push([dy, dx]);
                }
            }
        }
    }

    return total;
}

function solution(maps) {
    var answer = [];
    let visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false));

    for (let y = 0; y < maps.length; y++) {
        for (let x = 0; x < maps[0].length; x++) {
            if (!visited[y][x] && maps[y][x] !== 'X') {
                // 해당 섬의 총합 구하기
                answer.push(findIsland(maps, y, x, visited));
            }
        }
    }

    return answer.length ? answer.sort((a,b)=>a-b) : [-1]
}