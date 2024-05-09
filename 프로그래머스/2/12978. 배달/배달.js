function solution(N, road, K) {
    var answer = 0;
    const roads = {};
    const costs = [...new Array(N)].map((_,i)=>500000)
    
    road.forEach((value)=>{ // 양방향 도로 정보 저장
        let [start,end,cost] = value;
        if (start in roads) roads[start].push([end,cost])
        else roads[start] = [[end,cost]]
        if (end in roads) roads[end].push([start,cost])
        else roads[end] = [[start,cost]]
    })

    function dfs(curr, total_cost){ // 지점 당 최소 거리 계산
        if (total_cost<=costs[curr-1]) costs[curr-1] = total_cost
        else return;

        roads[curr].forEach((value)=>{
            let [end, cost] = value
            if (total_cost + cost <= K) dfs(end, total_cost + cost)
        })
    }
    
    dfs(1,0);
    
    answer += costs.filter(value => value <= K).length;
    return answer;
}