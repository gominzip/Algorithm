function solution(progresses, speeds) {
    var answer = [];
    let prev = {idx: 0, cost: 0};
    for(let i = 0; i < progresses.length; i++){
        let p = progresses[i], s = speeds[i];
        let needs = Math.ceil((100 - p) / s);
        if(i === 0) prev.cost = needs;
        if(needs > prev.cost) {
            answer.push(i - prev.idx);
            prev.cost = needs;
            prev.idx = i;
        }
    }
    
    answer.push(progresses.length - prev.idx);
    return answer;
}