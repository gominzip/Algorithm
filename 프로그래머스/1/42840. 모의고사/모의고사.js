function solution(answers) {
    var answer = [];
    let score = [0,0,0];
    const second = [2,1,2,3,2,4,2,5];
    const third =[3,3,1,1,2,2,4,4,5,5];
    
    for (let i=0; i<answers.length; i++){
        if (answers[i] === i % 5 + 1){
            score[0] ++;
        }
        if (answers[i] === second[i % 8]){
            score[1] ++;
        }
        if (answers[i] === third[i % 10]){
            score[2] ++;
        }
    }
    
    max = Math.max(...score);
    console.log(score,max)
    answer = score.reduce((acc, cur, idx) => {
        if (cur === max) {
            acc.push(idx + 1);
        }
        return acc;
    }, []);
    
    return answer;
}