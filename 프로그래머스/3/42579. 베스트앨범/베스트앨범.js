function solution(genres, plays) {
    var answer = [];
    const dict = {};
    let gp = genres.map((v,i)=>[plays[i],v, i]);
    
    gp.sort((a,b)=>b[0]-a[0]);
    gp.map(([play,genre,idx])=>{
        if(dict[genre]) {
            dict[genre][0]+=play;
            if (dict[genre][1].length <2) dict[genre][1].push(idx);
        }
        else dict[genre]=[play,[idx]];
    })
    
    gp = Object.values(dict);
    gp.sort((a,b)=>b[0]-a[0]);
    gp.forEach(v=>answer.push(...v[1]));
    return answer;
}