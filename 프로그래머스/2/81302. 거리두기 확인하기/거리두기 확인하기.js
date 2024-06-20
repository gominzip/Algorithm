function solution(places) {
    var answer = [];
    // 대기실 순회
    for (let place of places){
        let result = 1;
        for(let y=0; y<5; y++){
            for(let x=0; x<5; x++){
                // 응시자일시 검사
                if (place[y][x] === 'P' && !dfs(y,x,0,[[y,x]],place)){
                    result = 0;
                    break;
                }
            }
            if (!result) break;
        }
        answer.push(result);
    }
    return answer;
}

function dfs(cy,cx,distance,path,place){
    const direction = [[cy+1,cx],[cy-1,cx],[cy,cx+1],[cy,cx-1]];
    let result = true;
    
    for(let [dy,dx] of direction){
        if (!path.some(p => p[0] === dy && p[1] === dx) && 0<=dy && dy < 5 && 0<=dx && dx < 5){
            if (distance < 2 && place[dy][dx] === 'P') {
                // 응시자가 있으면 탐색 종료
                result = false;
            }
            else if (distance < 2 && place[dy][dx] === 'O'){
                // 빈테이블이면 탐색 진행
                result = dfs(dy,dx,distance+1,[...path,[dy,dx]],place);
            }
        }
        if (!result) break;
    }
    return result
}