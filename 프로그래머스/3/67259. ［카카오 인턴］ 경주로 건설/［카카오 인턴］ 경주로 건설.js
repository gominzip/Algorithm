function solution(board) {
    const N = board.length;
    // 진행방향(상하/좌우)별 좌표의 cost
    const dp = Array(N).fill().map(() => Array(N).fill().map(() => [Infinity, Infinity])); 
    const queue = [[0,0,0,0],[0,0,0,1]];  // y좌표, x좌표, cost, 진행방향
    
    while(queue.length){
        let [cy,cx,cost,dr] = queue.shift();
        
        for (const [dy, dx] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
            let [ny, nx] = [cy + dy, cx + dx];
            
            if (0 <= ny && ny < N && 0 <= nx && nx < N && !board[ny][nx]) {
                let change = (dy!==0) ? 0 : 1; // 방향 결정: 0은 상하, 1은 좌우
                let new_cost = (dr === change) ? cost + 100 : cost + 600;
                
                if (new_cost < dp[ny][nx][change]) {
                    dp[ny][nx][change] = new_cost;
                    queue.push([ny, nx, new_cost, change]);
                }
            }
        }
    }

    var answer = Math.min(dp[N-1][N-1][0],dp[N-1][N-1][1]);
    return answer;
}
