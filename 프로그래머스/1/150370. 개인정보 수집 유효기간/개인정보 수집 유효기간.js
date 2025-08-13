function solution(today, terms, privacies) {
    var answer = [];
    const DAYS = 28;
    const terms_dic = {};
    
    function getDays(str){
        let [y, m, d] = str.split('.').map(Number);
        return (y - 2000) * 12 * DAYS + m * DAYS + d;
    }
    
    for (let term of terms) {
        let [k, v] = term.split(' ');
        terms_dic[k] = Number(v) * DAYS;
    }
    
    const curr = getDays(today);
    
    for(let i = 0; i < privacies.length; i++){
        let [date, type] = privacies[i].split(' ');
        date = getDays(date);
        if(date + terms_dic[type] - curr <= 0) answer.push(i+1)
    }
    return answer;
}

