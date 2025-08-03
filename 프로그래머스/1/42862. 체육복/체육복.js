function solution(n, lost, reserve) {
    var answer = n - lost.length;
    const infoMap = new Map();
    
    for(let i = 1; i <= n; i++){
        infoMap.set(i, 1);
    }
    
    for(let l of lost){
        infoMap.set(l, 0);
    }
    
    for(let r of reserve){
        let clothes = infoMap.get(r) + 1
        infoMap.set(r, clothes);
        // 분실했지만 여분이 있는 학생
        if(clothes === 1) answer++;
    }
    
    // 그리디를 위해서는 번호순 정렬을 해야함
    lost.sort((a,b)=>a-b);
    
    for(let l of lost){
        if(infoMap.get(l)) continue
        let [front, back] = [l-1, l+1]
        if(infoMap.get(front) > 1){
            infoMap.set(front, 1);
            infoMap.set(l, 1);
            answer++;
            continue;
        }
        if(infoMap.get(back) > 1){
            infoMap.set(back, 1);
            infoMap.set(l, 1);
            answer++;
            continue;
        }
    }
    return answer;
}