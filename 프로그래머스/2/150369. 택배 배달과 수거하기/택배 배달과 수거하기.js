function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    let d_rest = 0, p_rest = 0; // 배송 및 수거 가능 여유
    
    for(let i = n-1 ; i >= 0; i--){
        let move_cnt = 0;
        deliveries[i] += d_rest;
        pickups[i] += p_rest;
        
        while(deliveries[i] > 0 || pickups[i] > 0){
            deliveries[i] -= cap;
            pickups[i] -= cap;
            move_cnt++;
        }
        
        // 초과된 배송/수거 값을 다음 집에 반영
        d_rest = deliveries[i];
        p_rest = pickups[i];
        
        answer += (i + 1) * move_cnt * 2;
    }
    
    return answer;
}