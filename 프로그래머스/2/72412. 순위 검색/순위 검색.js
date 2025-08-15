function solution(info, query) {
    var answer = [];
    const dic = new Map([
        ['cpp', 0], ['java', 1], ['python', 2],
        ['backend', 0], ['frontend', 1],
        ['junior', 0], ['senior', 1],
        ['chicken', 0], ['pizza', 1]
    ]);
    
    const grade = new Map();
    
    // 탐색으로 가능한 코드 경우의 수 반환
    function getCode(idx, info, code, result){
        if(code.length === info.length) {
            result.push(code);
            return;
        }
        const key = info[idx]
        if(key === '-'){
            const limit = (idx === 0) ? 3 : 2;
            for (let i = 0; i < limit; i++) {
                getCode(idx + 1, info, code + i, result);
            }
        } else {
            getCode(idx + 1, info, code + dic.get(key), result);
        }
    }
    
    // 정보 코드로 파싱 및 저장
    for (const line of info) {
        const [l, p, c, f, gStr] = line.split(' ');
        let code = '';
        for (const key of [l, p, c, f]) code += dic.get(key);
        if (!grade.has(code)) grade.set(code, []);
        grade.get(code).push(Number(gStr));
    }
    // 점수 오름차순 정렬
    for (const arr of grade.values()) arr.sort((a, b) => a - b);
    
    // 이분 탐색
    function lowerBound(arr, target) {
        let lo = 0, hi = arr.length;
        while(lo < hi){
            const mid = (lo + hi) >> 1;
            if(arr[mid] >= target) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }
    
    for(let q of query){
        const [l, p, c, f, gStr] = q.replace(/ and /g, ' ').split(' ');
        const g = Number(gStr);
        let codes = [];
        
        getCode(0, [l, p, c, f], "", codes);
        
        let cnt = 0;
        for(let code of codes){
            let arr = grade.get(code);
            if(!arr) continue;
            const idx = lowerBound(arr, g);
            cnt += (arr.length - idx);
        }
        answer.push(cnt);
    }
    
    return answer;
}