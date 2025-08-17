function solution(brown, yellow) {
    var answer = [];
    const total = brown + yellow;
    for(let i = 1; i <= Math.ceil(total/2); i++){
        if(total % i === 0){
            let c = i, r = total / i;
            if(2 * (c + r - 2) === brown && (c - 2) * (r - 2) === yellow){
                answer = [r, c];
                break;
            }
        }
    }
    return answer;
}