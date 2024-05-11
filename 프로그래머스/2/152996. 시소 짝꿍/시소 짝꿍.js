function solution(weights) {
    var answer = 0;
    const frequency = {}; // 각 무게의 빈도수

    weights.forEach((weight) => {
        frequency[weight] ? frequency[weight]++ : frequency[weight] = 1;
    });

    let set = new Set(weights);
    
    for(const weight of set) {
        let count = frequency[weight];
        answer += parseInt(count * (count - 1) / 2);
        
        for(const [dis1, dis2] of [[2,3],[2,4],[3,4]]) {
            answer += (frequency[weight * dis1/dis2] * count || 0)
        }
    }

    return answer;
}
