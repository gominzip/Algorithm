function solution(N, stages) {
    var answer = [];
    
    stages.sort(function(a,b){
        return b-a;
    });

    const fail_rate = [...new Array(N)].map((_,i)=>[i+1,0]);  // 스테이지,실패율
    
    for (let stage=1; stage<N+1; stage++){
        let [p,f] = [0,0];
        for (let curr=0; curr < stages.length; curr++){
            if (stages[curr] > stage) p++;
            else if (stages[curr] == stage){p++; f++;}
            else break;
        }
        if(p!==0) fail_rate[stage-1][1] = f/p
    }
    
    fail_rate.sort(function(a,b){ return b[1]-a[1]; });
    
    answer = fail_rate.map(([value]) => value);
    
    return answer;
}