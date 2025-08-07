function solution(friends, gifts) {
    var answer = 0;
    const giftMap = {}
    const giftScore = {}
    
    for(let from of friends){
        giftMap[from] = {};
        giftScore[from] = 0;
        for(let to of friends){
            if(from === to) continue;
            giftMap[from][to] = 0;
        }
    }
    
    for(let gift of gifts){
        let [from, to] = gift.split(" ");
        giftMap[from][to]++;
        giftScore[from]++;
        giftScore[to]--;
    }
    
    // 다음달 선물 계산하기
    for(let from of friends){
        let count = 0;
        for(let to of friends){
            if(giftMap[from][to] > giftMap[to][from]) count++;
            else if(giftMap[from][to] == giftMap[to][from] && giftScore[from] > giftScore[to]) count++;
        }
        answer = Math.max(answer, count)
    }
    
    return answer;
}