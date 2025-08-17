function solution(str1, str2) {
    var answer = 0;
    const regex = /^[a-z]+$/;
    const m1 = new Map(), m2 = new Map();
    
    function addBigrams(s, map) {
        s = s.toLowerCase();
        for (let i = 1; i < s.length; i++) {
          const token = s[i - 1] + s[i];
          if (regex.test(token)) {
            map.set(token, (map.get(token) || 0) + 1);
          }
        }
      }

    addBigrams(str1, m1);
    addBigrams(str2, m2);
    
    let inter = 0, union = 0;
    const keys = new Set([...m1.keys(), ...m2.keys()]);
    for(let k of keys){
        let v1 = m1.get(k) || 0, v2 = m2.get(k) || 0;
        inter += Math.min(v1, v2);
        union += Math.max(v1, v2);
    }
    
    answer = union ? inter / union : 1;
    answer *= 65536;
    
    return Math.floor(answer);
}