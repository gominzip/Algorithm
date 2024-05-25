function solution(m, musicinfos) {
    var answer = [];
    m = changeCode(m)
    
    for (let info of musicinfos){
        [start,end,title,melody]=info.split(',')
        
        melody = changeCode(melody)
        play_time = (Number(end.slice(0,2))*60 + Number(end.slice(3)))-(Number(start.slice(0,2))*60 + Number(start.slice(3)))
        
        while (melody.length < play_time) melody += melody
        melody = melody.slice(0,play_time)
        
        if(melody.includes(m)) answer.push([title,play_time])
    }
    
    if (answer.length === 0) return "(None)"
    
    answer.sort((a,b)=> b[1]-a[1])
    return answer[0][0];
}

function changeCode(melody) {
    return melody.replace(/C#|D#|E#|F#|G#|A#|B#/g, function(match) {
        return match[0].toLowerCase();
    });
}
