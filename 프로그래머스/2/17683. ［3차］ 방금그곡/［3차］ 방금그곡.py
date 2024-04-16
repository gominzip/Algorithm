import math

def changeMelody(mel):
    mel = mel.replace("C#","c").replace("D#","d").replace("F#","f").replace("G#","g").replace("A#","a").replace("E#","e").replace("B#","b")
    return mel
    
def solution(m, musicinfos):
    answer = ''
    m = changeMelody(m)
    musics = []
    max_length = 0
    
    for infos in musicinfos:
        start,end,title,melody = infos.split(',')
        melody = changeMelody(melody)
        play_time = (int(end[:2])*60 + int(end[3:])) - (int(start[:2])*60 + int(start[3:])) 
                
        if len(melody) >= play_time:
            musics.append([title,melody[:play_time]])
        else:
            musics.append([title,(melody*math.ceil(play_time/len(melody)))[:play_time]])
            
    for music in musics:   
        if m in music[1] and len(music[1]) > max_length:
            max_length = len(music[1])
            answer = music[0]

    if answer == '':
        return '(None)'

    return answer