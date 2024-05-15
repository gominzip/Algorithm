function solution(record) {
    var answer = [];
    const user = {}
    for(let r of record){
        let [act,id,name] = r.split(' ');
        if(name) user[id] = name;
    }
    for(let r of record){
        let [act,id,name] = r.split(' ');
        if(act!=='Change') answer.push(`${user[id]}님이 ${act==='Enter'?'들어왔습니다.':'나갔습니다.'}`)
    }
    
    return answer;
}