function solution(n, t, m, p) {
    var answer = '';
    let number = 0;
    let player = 0;
    
    while(answer.length < t){
        let numStr = number.toString(n);
        let pt = 0;
        
        while(pt < numStr.length){
            if(player % m === p - 1) answer += numStr[pt];
            pt++;
            player++;
            if(answer.length === t) break;
        }
        
        number++;
    }
    
    return answer.toUpperCase();
}