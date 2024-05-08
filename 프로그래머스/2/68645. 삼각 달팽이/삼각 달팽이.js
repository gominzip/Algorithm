function solution(n) {
    var answer = [];
    let size = 0
    let control = 0
    let [x,y] = [0,0]
    
    const snail = [... new Array(n)]
    .map((_,i)=>{
        size += i+1;
        return [... new Array(i+1)].fill(0);
    })
    
    for (let i =1; i< size+1; i++){
        snail[y][x] = i;
        if (control === 0){ // down
            if (y+1<snail.length && snail[y+1][x] === 0) y++;
            else {
                control = 1;
                x++;
            }
        } else if (control === 1){  // right
            if (x<snail[y].length && snail[y][x+1] === 0) x++;
            else {
                control = 2;
                y--;
                x--;
            }
        } else{ // up
            if (y-1>0 &&snail[y-1][x-1] === 0){
                y--;
                x--;
            }
            else{
                control = 0;
                y++;
            }
        } 
    }
    //  모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성
    answer = snail.flat();  
    return answer;
}