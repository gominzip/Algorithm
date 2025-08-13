function solution(alp, cop, problems) {
    var answer = 0;
    let A = 0, C = 0;
    for (const [ar, cr] of problems) { A = Math.max(A, ar); C = Math.max(C, cr); }
    
    alp = Math.min(alp, A);
    cop = Math.min(cop, C);
    
    // (알고력, 코딩력)으로 가는데 필요한 최소 시간
    const dp = Array.from({ length: A+1 }, ()=> Array(C + 1).fill(Infinity));
    dp[alp][cop] = 0
    
    for(let i = alp; i <= A; i++){
        for(let j = cop; j <= C; j++){
            if(dp[i][j] === Infinity) continue;
            
            // 공부로 올리는 케이스
            if(i+1 <= A){
                dp[i+1][j] = Math.min(dp[i+1][j], dp[i][j] + 1);
            }
            if(j+1 <= C){
                dp[i][j+1] = Math.min(dp[i][j+1], dp[i][j] + 1);
            }
            
            // 문제 풀기로 올리는 케이스
            for(let [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems){
                if(i >= alp_req && j >= cop_req){
                    // 최대치 이후으로는 탐색하지 않도록 주의
                    let ni = Math.min(A, i + alp_rwd);
                    let nj = Math.min(C, j + cop_rwd);
                    dp[ni][nj] = Math.min(dp[ni][nj], dp[i][j] + cost)
                }
            }
        }
    }
    
    answer = dp[A][C];
    
    return answer;
}