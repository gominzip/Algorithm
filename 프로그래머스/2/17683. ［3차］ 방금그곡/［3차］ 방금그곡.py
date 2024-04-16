import math
def solution(m, musicinfos):
    answer = ''
    m_copy =[]
    musics = []
    max_length = 0
    
    for i in range(len(m)):
            if m[i] != '#':
                if i+1 != len(m) and m[i+1] == '#':
                    m_copy.append(m[i].lower()) # 샾의 경우에 소문자로 저장
                else: m_copy.append(m[i]) 
    m_copy = ''.join(m_copy)
    
    for infos in musicinfos:
        start,end,title,melody = infos.split(',')
        melodies = []
        play_time = (int(end[:2])*60 + int(end[3:])) - (int(start[:2])*60 + int(start[3:]))
        
        for j in range(len(melody)):
            if melody[j] != '#':
                if j+1 != len(melody) and melody[j+1] == '#':
                    melodies.append(melody[j].lower())
                else: melodies.append(melody[j])       
                
        if len(melodies) >= play_time:
            musics.append([title,''.join(melodies[:play_time])])
        else:
            musics.append([title,''.join((melodies*math.ceil(play_time/len(melodies)))[:play_time])])
            
    for music in musics:   
        if m_copy in music[1] and len(music[1]) > max_length:
            max_length = len(music[1])
            answer = music[0]
            
    if answer == '':
        return '(None)'

    return answer