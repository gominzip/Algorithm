const notVisited = -1;
function solution(n, edge) {
    var answer = 0;
    const lines = {};
    const costs = [... new Array(n+1)].map((_)=>notVisited);
    const path = []
    
    edge.forEach(([n1,n2])=>{
        lines[n1]?lines[n1].push(n2):lines[n1]=[n2];
        lines[n2]?lines[n2].push(n1):lines[n2]=[n1];
    });
    
    costs[1] = 0;
    path.push(1);
    
    while(path.length){
        let node = path.shift();  // 첫번째 요소
        let line = lines[node];
        for(let i of line){
            if (costs[i] === notVisited){
                costs[i] = costs[node]+1;
                path.push(i);
            }
        }
    }
    
    const maxCost = Math.max(...costs);
    answer = costs.filter((value)=>value ===maxCost);
    
    return answer.length
}