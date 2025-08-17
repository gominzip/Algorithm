function solution(cacheSize, cities) {
    var answer = 0;
    const cache = new Map();
    
    if(!cacheSize) return cities.length * 5;
    
    for(let i = 0; i < cities.length; i++){
        let city = cities[i].toLowerCase();
        if(!cache.has(city)){
            answer += 5;
            if(cache.size >= cacheSize) extractLRU(cache);
            cache.set(city, i);
        } else {
            answer += 1;
            cache.set(city, i);
        }
    }
    return answer;
}

function extractLRU(cache){
    const cacheArray = [...cache];
    cacheArray.sort((a, b) => a[1] - b[1]);
    cache.delete(cacheArray[0][0]);
}