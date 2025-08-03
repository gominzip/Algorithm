function solution(n, lost, reserve) {
    const clothes = Array(n + 1).fill(1);

    const realLost = lost.filter(l => !reserve.includes(l));
    const realReserve = reserve.filter(r => !lost.includes(r));
    
    realLost.forEach(l => clothes[l]--);
    realReserve.forEach(r => clothes[r]++);
    
    // 그리디를 위해서는 번호순 정렬을 해야함
    realLost.sort((a,b) => a - b);
    
    for(let l of realLost){
        let [front, back] = [l-1, l+1]
        
        if(front > 0 && clothes[front] === 2){
            clothes[front]--;
            clothes[l]++;
        } else if(back <= n && clothes[back] === 2){
            clothes[back]--;
            clothes[l]++;
        }
    }
    
    return clothes.slice(1).filter(c => c > 0).length;
}