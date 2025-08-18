function solution(rectangle, characterX, characterY, itemX, itemY) {
    const N = 102;
    const board = Array.from({ length: N }, () => Array(N).fill(0));

    for (const [lx, ly, rx, ry] of rectangle) {
        for (let x = lx * 2; x <= rx * 2; x++) {
            for (let y = ly * 2; y <= ry * 2; y++) {
            board[y][x] = 1;
            }
        }
    }

    for (const [lx, ly, rx, ry] of rectangle) {
        for (let x = lx * 2 + 1; x < rx * 2; x++) {
            for (let y = ly * 2 + 1; y < ry * 2; y++) {
            board[y][x] = 0;
            }
        }
    }
    
    characterX *= 2, characterY *= 2, itemX *= 2, itemY *= 2;
    let q = [[characterX, characterY]]
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let total = 0;
    let cost = 0;
    
    while(q.length){
        let [x, y] = q.pop();
        board[y][x] = 2;
        total++;
        if(x === itemX && y === itemY){
            cost = total - 1;
        }
        for(let [dx, dy] of dir){
            let nx = x + dx, ny = y + dy;
            if(nx >= 0 && nx < N && ny >= 0 && ny < N && board[ny][nx] === 1){
                q.push([nx, ny]);
                break;
            }
        }
    }

    answer = Math.ceil(Math.min(cost, total - cost)/2)

    return answer;
}

