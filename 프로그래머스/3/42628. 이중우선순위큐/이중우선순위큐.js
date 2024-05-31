function solution(operations) {
    var answer = [];
    operations.map((value)=>{
        let [op,num] = value.split(' ');
        num = Number(num);
        if(op==='I'){
            answer.push(num);
        } else if(num===1){
            let max = Math.max(...answer);
            answer.splice(answer.indexOf(max),1);
        }else{
            let min = Math.min(...answer);
            answer.splice(answer.indexOf(min),1);
        }
    });
    
    if (answer.length) return [Math.max(...answer),Math.min(...answer)];
    return [0,0];
}