function solution(msg) {
    var answer = [];
    const base = 'A'.charCodeAt() - 1;
    const dic = {};
    let num = 'Z'.charCodeAt() - base + 1;
    
    let i = 0;
    let w = msg[i];

    while(i < msg.length){
        if(!msg[i + 1]) {
            let output = w.length === 1? w.charCodeAt() - base : dic[w];
            answer.push(output);
            i++;
        } else {
            while(msg[i + 1] && dic[w + msg[i + 1]]){
                w += msg[i + 1];
                i++;
            }
            
            if(!dic[w + msg[i + 1]]){
                let output = w.length === 1? w.charCodeAt() - base : dic[w];
                answer.push(output);
                if(msg[i + 1]){
                    dic[(w + msg[i + 1])] = num;
                    num++;
                }
                i++;
                w = msg[i];
            }
        }
    }
    return answer;
}