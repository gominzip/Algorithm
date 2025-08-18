function solution(game_board, table) {
    var answer = 0;
    const { blockSizes, blockRoutes } = tableDFS(table);
    const emptyBlocks = boardDFS(game_board);
    const used = new Set();
    
    for (const empty of emptyBlocks) {
        const size = empty.length;
        if (!blockSizes.has(size)) continue;

        let matched = false;
        for (const label of blockSizes.get(size)) {
            if (used.has(label)) continue;
            const rotations = blockRoutes[label];
            if (rotations.some(rot => isSame(rot, empty))) {
                answer += size;
                used.add(label);
                matched = true;
                break;
            }
        }
    }
    return answer;
}

function tableDFS(board){
    const N = board.length;
    const dir = [[0,1], [1,0], [-1,0], [0,-1]];
    let label = 1;
    const blockSizes = new Map();
    const blockRoutes = {}
    
    for(let r = 0; r < N; r++){
        for(let c = 0; c < N; c++){
            if(board[r][c] === 1) {
                let block = []
                dfs(r, c, block);
                blockSizes.set(block.length, [...(blockSizes.get(block.length) || []), label]);
                blockRoutes[label] = getRotationInfo(block);
                label++;
            };
        }
    }
    
    function dfs(r, c, route){
        board[r][c] = 2;
        route.push([r, c]);
        
        for(let [dr, dc] of dir){
            let nr = r + dr, nc = c + dc;
            if(nr >= 0 && nr < N && nc >= 0 && nc < N && board[nr][nc] === 1){
                dfs(nr, nc, route);
            }
        }
    }
    
    return { blockSizes, blockRoutes };
}

function getRotationInfo(block){
    const info = [];
    info.push(normalize(block));
    info.push(normalize(block.map(([x, y]) => [y, -x])))  // 90도
    info.push(normalize(block.map(([x, y]) => [-x, -y])))  // 180도
    info.push(normalize(block.map(([x, y]) => [-y, x])))  // 270도
    return info;
}

function normalize(block){
    let minX = Math.min(...block.map(([x, _]) => x));
    let minY = Math.min(...block.map(([_, y]) => y));
    return block.map(([x,y]) => [x - minX, y - minY]);
}

function boardDFS(board){
    const N = board.length;
    const dir = [[0,1],[1,0],[-1,0],[0,-1]];
    const blocks = [];
    
    for(let r=0;r<N;r++){
        for(let c=0;c<N;c++){
            if(board[r][c] === 0){
                let block = [];
                dfs(r,c,block);
                blocks.push(normalize(block));
            }
        }
    }
    
    function dfs(r,c,route){
        board[r][c] = 2;
        route.push([r,c]);
        for(let [dr,dc] of dir){
            let nr=r+dr, nc=c+dc;
            if(nr>=0 && nr<N && nc>=0 && nc<N && board[nr][nc]===0){
                dfs(nr,nc,route);
            }
        }
    }
    
    return blocks;
}

function isSame(a,b){
    if(a.length !== b.length) return false;
    // 추출 위치에 따라 좌표의 순서는 다르므로 정렬 필요
    const sa = [...a].sort((p,q)=>p[0]-q[0] || p[1]-q[1]);
    const sb = [...b].sort((p,q)=>p[0]-q[0] || p[1]-q[1]);
    return sa.every(([x,y],i)=> x===sb[i][0] && y===sb[i][1]);
}