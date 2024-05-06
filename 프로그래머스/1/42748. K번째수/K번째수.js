function solution(array, commands) {
    var answer = [];
    const command_map = commands.map(function(value, index){
        let temp = array.slice(value[0]-1,value[1])
        temp.sort(function(a,b){
            return a-b
        })
        answer.push(temp[value[2]-1])
    })
    return answer;
}