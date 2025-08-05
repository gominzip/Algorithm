function solution(people, limit) {
    var answer = 0;
    let [left, right] = [0, people.length-1];
    
    people.sort((a,b)=>a-b);
    
    while(left <= right){
        let temp = people[right];
        if(temp + people[left] <= limit && left < right){
            temp += people[left];
            left++;
        }
        right--;
        answer++;
    }
    
    return answer;
}