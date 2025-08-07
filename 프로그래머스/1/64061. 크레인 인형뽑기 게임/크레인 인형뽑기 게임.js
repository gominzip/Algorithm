function solution(board, moves) {
    var answer = 0;
    const N = board.length;
    const basket = Array(N).fill(0);
    let top = -1;
    
    function pickDoll(x){
        x -= 1;
        for(let y = 0; y < N; y++){
            let doll = board[y][x];
            if(doll !== 0) {
                board[y][x] = 0;
                return doll;
            };
        }
        return null;
    }
    
    function checkBasket() {
        if(top > 0 && basket[top] == basket[top-1]){
            basket[top] = 0;
            basket[top-1] = 0;
            top -= 2
            answer += 2;
        }
    }
    
    for(let move of moves){
        let doll = pickDoll(move);
        if(!doll) continue;
        top++;
        basket[top] = doll;
        checkBasket();
    }
    
    return answer;
}

