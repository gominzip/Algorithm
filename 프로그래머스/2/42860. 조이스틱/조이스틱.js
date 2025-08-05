function solution(name) {
    const n = name.length;
    let charMoves = 0;
    let cursorMoves = n - 1;
    
    for(let i = 0; i < n; i++){
        charMoves += getUpDownCnt(name[i]);
        
        let next = i+1;
        while(next < n && name[next] === "A"){
            next++; // 연속된 A 이후의 인덱스 구하기
        }
        // 왼쪽으로 우회 시
        let turnToLeft = i * 2 + (n - next);
        // 오른쪽으로 우회 시
        let turnToRight = (n - next) * 2 + i
        cursorMoves = Math.min(cursorMoves, turnToLeft, turnToRight)
    }
    
    return charMoves + cursorMoves;
}

function getUpDownCnt(c){
    const [A, Z] = ['A', 'Z'].map(v => v.charCodeAt());
    const target = c.charCodeAt();
    const upCnt = target - A;
    const downCnt = Z - target + 1;
    return Math.min(upCnt, downCnt);
}