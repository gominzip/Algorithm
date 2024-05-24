
function solution(numbers) {
    var answer = 0;
    const set = new Set([]);
    
    dfs("", numbers, set);
    set.forEach((value)=> {
        if(isPrime(value)) answer++;
    });
    
    return answer;
}

function dfs(curr, numbers, set) {
    if (curr !== "") set.add(Number(curr));
    for (let i = 0; i<numbers.length; i++){
        dfs(curr+numbers[i],numbers.slice(0,i)+numbers.slice(i+1),set);
    }
}

function isPrime(number) {
    if (number === 0 ||number === 1) return false;
    for (let n = 2; n<number; n++){
        if (number%n ===0) return false;
    }
    return true;
}