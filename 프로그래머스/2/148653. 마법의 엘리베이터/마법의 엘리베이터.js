function solution(storey) {
    var answer = 0;
        
    while(storey > 0){
        let digit = storey % 10;
        
        if(digit < 5) {
            answer += digit;
            storey = Math.floor(storey / 10);
        } else if (digit > 5){
            answer += (10 - digit);
            storey = Math.floor(storey / 10) + 1;
        } else {
            let next = Math.floor(storey / 10) % 10;
            if (next >= 5) {
                answer += 5;
                storey = Math.floor(storey / 10) + 1;
            } else {
                answer += 5;
                storey = Math.floor(storey / 10);
            }
        }
    }
    
    return answer;
}