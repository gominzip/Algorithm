function solution(k, tangerine) {
    var answer = 0;
    let total = 0;
    count = {}
    
    tangerine.map((value) => {
        if (count[value]) count[value] +=1
        else count[value] = 1;
    })
    // 개수가 많은 크기순으로 정렬
    sorted_count = Object.entries(count).sort((a,b)=>b[1]-a[1]);
    sorted_count.map(([key,value])=>{
        if (total < k){
            answer ++;
            total += value;
        }
    })
    
    return answer;
}