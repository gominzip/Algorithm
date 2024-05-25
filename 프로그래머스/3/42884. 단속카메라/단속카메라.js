function solution(routes) {
    var answer = 0;
    routes.sort((a,b)=>a[1]-b[1])
    current = -30001
    console.log(routes)
    for (let route of routes){
        if(route[0]>current){
            current = route[1];
            answer ++;
        }
    }
    return answer;
}