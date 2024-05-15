function solution(word) {
    var answer = 0;
    const history = []
    dfs('',history);
    answer = history.indexOf(word) +1;
    return answer;
}

function dfs(path, history){
    if (path.length >5) return
    if (path) history.push(path)
    alphabet = ['A','E','I','O','U']
    for (let a of alphabet){
        dfs(path + a, history);
    }
}