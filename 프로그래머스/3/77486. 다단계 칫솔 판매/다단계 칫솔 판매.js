function solution(enroll, referral, seller, amount) {
    var answer = [];
    const tree = {'center': { profit: 0, referral: null }};
    // 수익과 추천인 초기화
    enroll.map((v,i)=>{
        tree[v] = {profit: 0, referral: referral[i] === '-'? 'center' : referral[i]}
    })
    // 판매수익 수수료 계산 및 수익 반영
    seller.map((v,i)=>{
        profit = amount[i]*100
        while(tree[v].referral){
            if(!profit) break;  // 수익 없을 시 종료
            charge = parseInt(profit * 0.1);
            tree[v].profit += profit - charge;
            profit = charge;
            v = tree[v].referral;
        }
        tree[v].profit += profit;
    })
    
    enroll.map((v)=>{
        answer.push(tree[v].profit);
    })
    
    return answer;
}