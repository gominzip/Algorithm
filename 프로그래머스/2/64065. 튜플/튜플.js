function solution(s) {
    var answer = [];
    s = s.slice(1, -1);
    const matches = [...s.matchAll(/\{([^{}]*)\}/g)].map(m => m[1].split(",").map(Number));
    matches.sort((a,b)=>a.length - b.length);
    
    for(let match of matches){
        let test = match.filter(m => !answer.includes(m))
        answer = [... answer, ...test]
    }
    
    return answer;
}