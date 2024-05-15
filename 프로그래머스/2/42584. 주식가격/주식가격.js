function solution(prices) {
    var answer = [...new Array(prices.length)].map(()=>0);
    const stack = [];
    let time = -1;
    
    prices.forEach((price,i)=>{
        time ++;
        while(stack[stack.length-1] && price<stack[stack.length-1][0]){
            let idx = stack.pop()[1];
            answer[idx] = time-idx;
        }
        stack.push([price,i]);
    })
    
    stack.forEach(value=>answer[value[1]]=time-value[1]);

    return answer;
}