function find(x, parent){
    if (parent[x] == x) return x
    parent[x] = find(parent[x],parent)
    return parent[x]
}
function union(a, b, parent){
    const rootA = find(a,parent);
    const rootB = find(b,parent);
    
    if (rootB > rootA) parent[rootB] = rootA
    else parent[rootA] = rootB
}
function solution(n, costs) {
    var answer = 0;
    costs.sort((a,b)=>a[2]-b[2]);
    parent = [...new Array(n)].map((_,i)=>i);
    
    for (let i = 0; i<costs.length; i++){
        if (find(costs[i][0],parent) !== find(costs[i][1],parent)){
            union(costs[i][0],costs[i][1],parent);
            answer += costs[i][2]
        }
    }
    return answer;
}