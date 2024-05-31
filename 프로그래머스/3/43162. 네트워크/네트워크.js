function solution(n, computers) {
    var answer = 0;
    const visited = []
    for(let i=0; i < n ; i++){
        if (!visited.includes(i)){
            dfs(computers, i , visited)
            answer ++
        }
    }
    return answer;
}

function dfs(computers, start , visited) {
    visited.push(start);
    computers[start].map((v,i)=>{
        if(i !== start && !visited.includes(i) && v === 1){
            dfs(computers, i, visited)
        }
    })
}