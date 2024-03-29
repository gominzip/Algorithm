def solution(record):
    answer = []
    user_dic = {}
    for data in record :
        line = data.split()
        if(line[0]=='Change' or line[0]=='Enter') :
            user_dic[line[1]] = line[2]
            
    for data in record :
        line = data.split()
        if(line[0]=='Enter'):
            answer.append(user_dic[line[1]] + '님이 들어왔습니다.')
        if(line[0]=='Leave'):
            answer.append(user_dic[line[1]] + '님이 나갔습니다.')
            
    return answer