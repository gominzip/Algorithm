function solution(maps) {
    var answer = 0;
    const n = maps.length, m = maps[0].length;
    const graph = Array.from({length: n}, () => new Array(m).fill(Infinity));
    const queue = [[0, 0, 1]];
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    
    while(queue.length){
        let [r, c, cost] = queue.shift();
        for(let [dr, dc] of dir){
            let nr = r + dr, nc = c + dc;
            if(nr >= 0 && nr < n && nc >= 0 && nc < m && maps[nr][nc]){
                if(cost + 1 < graph[nr][nc]) {
                    queue.push([nr, nc, cost + 1]);
                    graph[nr][nc] = cost + 1;
                }
            }
        }
    }
    
    answer = graph[n-1][m-1];
    return answer === Infinity ? -1 : answer;
}