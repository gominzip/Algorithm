function solution(queue1, queue2) {
    let q1 = queue1.reduce((prev, curr) => prev + curr);
    let q2 = queue2.reduce((prev, curr) => prev + curr);
    let target = (q1 + q2) / 2;
    const q = [...queue1, ...queue2];
    const n = queue1.length;
    let left = 0, right = n - 1;
    
    let cnt = 0;
    
    if((q1 + q2) % 2) return -1;
    
    while(q1 !== q2){
        if(left === n && right === q.length - 1) break;
        if(right === 0 && left === n - 1) break;
        if(q1 < q2) {
            right = (right + 1) % q.length;
            q1 += q[right];
            q2 -= q[right];  
        } else {
            q1 -= q[left];
            q2 += q[left];
            left = (left + 1) % q.length;
        }
        cnt++;
    }
    
    if(q1 !== q2) return -1;
    
    return cnt;
}