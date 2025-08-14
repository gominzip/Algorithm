function solution(new_id) {
    let answer = new_id;
    answer = answer.toLowerCase();
    answer = answer.replace(/[^a-z0-9-_.]/g,'');
    answer = answer.replace(/\.{2,}/g, '.');
    answer = answer.replace(/^\.|\.$/g, '');
    if(!answer) answer = 'a';
    if(answer.length >= 16) {
        answer = answer.slice(0, 15);
        answer = answer.replace(/\.$/g, '');
    }
    while(answer.length <= 2) {
        answer += answer[answer.length -1];
    }
    return answer;
}