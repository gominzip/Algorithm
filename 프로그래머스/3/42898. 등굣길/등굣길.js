function solution(m, n, puddles) {
    const maps = Array.from({length: n}, () => new Array(m).fill(0));
    const MOD = 1000000007;
    
    puddles.forEach(([x, y]) => maps[y - 1][x - 1] = -1);
    maps[0][0] = 1;
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if (maps[i][j] === -1) {
                maps[i][j] = 0;
                continue;
            }
            
            if (i > 0) maps[i][j] = (maps[i][j] + maps[i - 1][j]) % MOD;
            if (j > 0) maps[i][j] = (maps[i][j] + maps[i][j - 1]) % MOD;
        }
    }
    
    return maps[n - 1][m - 1];
}