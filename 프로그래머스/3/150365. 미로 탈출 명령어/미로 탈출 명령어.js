function solution(n, m, x, y, r, c, k) {
    var answer = '';
    const dist = Math.abs(r - x) + Math.abs(c - y);
    if (dist > k || ((k - dist) % 2) === 1) return "impossible";
    
    // 사전식 최소순으로 탐색
    const dirs = [
        ['d', 1, 0],
        ['l', 0, -1],
        ['r', 0,  1],
        ['u', -1, 0],
    ];
    
    for (let step = 0; step < k; step++) {
        // 각 스텝에서 네 방향 시도
        for (const [ch, dx, dy] of dirs){
            const nx = x + dx, ny = y + dy;
            if(nx < 1 || nx > n || ny < 1 || ny > m) continue;
            const rem = k - (step + 1);
            const d = Math.abs(r - nx) + Math.abs(c - ny);
            // 남은 걸음으로 도달 가능여부 확인
            if (d <= rem && ((rem - d) % 2) === 0) {
                answer += ch;
                x = nx; y = ny;
                break;
            }
        }
    }

    return answer;
}