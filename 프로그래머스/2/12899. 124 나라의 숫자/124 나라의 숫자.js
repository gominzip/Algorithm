function solution(n) {
    var answer = '';
    const lists = [];
    
    base3(n,lists);
    lists.reverse();
    
    while (lists.includes(0)){
        if(lists[0] === 0) lists.shift();  // 첫 번째 요소 제거
        for(let i = 0; i < lists.length; i++){
            if(lists[i] === 0){
                lists[i] = 4;
                lists[i-1]--;
                if(lists[i-1] === 3) lists[i-1] = 2;
            }
        }
    }
    
    answer = lists.join('');
    return answer;
}

function base3(n, lists) {
    let a = Math.floor(n / 3);
    let b = n % 3;
    lists.push(b)
    
    if (a < 3){
        if (a !== 0) lists.push(a);
        return lists;
    } else {
        base3(a, lists);
    }
}