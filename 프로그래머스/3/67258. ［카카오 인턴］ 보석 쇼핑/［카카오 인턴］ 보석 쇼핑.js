function solution(gems) {
    var answer = [];
    const gem_map = new Map();
    const gem_size = new Set(gems).size;
    
    gems.forEach((gem,i)=>{
        gem_map.delete(gem);
        gem_map.set(gem,i); // key:보석 이름, value:현재 인덱스
        
        if(gem_map.size === gem_size){
            // map의 첫번째 요소와 마지막요소(현재 위치)를 push
            answer.push([gem_map.values().next().value+1,i+1]);
        }
    })
    
    answer.sort((a,b)=> (a[1]-a[0]) - (b[1]-b[0]))

    return answer[0];
}