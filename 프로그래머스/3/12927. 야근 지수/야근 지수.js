function solution(n, works) {
    var answer = 0;
    works.sort((a,b)=>b-a)
    
    while (n>0){
        if (works[0] === 0) return 0;
        works[0]--;
        n--;
        i = 0;
        while (i < works.length-1 && works[i] < works[i+1]){
            [works[i],works[i+1]] = [works[i+1],works[i]];
            i++;
        }
    }
    
    works.map((value)=> answer += value**2)
    return answer;
}