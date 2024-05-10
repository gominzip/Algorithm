function solution(stones, k) {
    let [start,end] = [0,200000000];
    
    while(start <= end){
        let count = 0
        let mid = Math.floor((start+end)/2);

        for (let i =0; i<stones.length; i++){
            if(stones[i]-mid <=0 ) count ++
            else count = 0
            
            if (count === k) break;
        }
        if (count === k) end = mid-1;
        else start = mid+1;
    }
    return start;
}