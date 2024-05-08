function solution(number, k) {
    const stack = [number[0]];
    for(let i=1; i<number.length; i++){
        while (true){
            if(stack.length > 0 && k>0 && stack[stack.length-1]<number[i]) {
                stack.pop();
                k--;
            } else{
                stack.push(number[i]);
                break;
            }
        }
    }

    return stack.slice(0,stack.length-k).join("");
}