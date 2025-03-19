function solution(topping) {
    var answer = 0;
    const typeCount = (new Set(topping)).size;
    const chulsu = new Map();
    const brother = new Map();
    topping.forEach(t => {
        chulsu.set(t, (chulsu.get(t) ?? 0) + 1);
    })
    console.log(chulsu, brother)
    
    for(let t of topping){
        brother.set(t, (brother.get(t) ?? 0) + 1);
        chulsu.set(t, chulsu.get(t) - 1);
        
        if(!chulsu.get(t)) chulsu.delete(t);
        if(brother.size === chulsu.size) answer++;
    }
    
    return answer;
}