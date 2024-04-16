def solution(genres, plays):
    answer = []
    dic ={}
    for i in range(len(plays)):
        if genres[i] in dic:
            dic[genres[i]]['total'] += plays[i]
            dic[genres[i]]['plays'].append((plays[i],i))
        else: dic[genres[i]]={'total': plays[i], 'plays':[(plays[i], i)]}
        
    for key in dic:
        dic[key]['plays'] = sorted(dic[key]['plays'], key=lambda x: x[0], reverse=True)
    
    dic = sorted(dic.items(), key=lambda x: x[1]['total'], reverse=True)    # x[0] = key, x[1] = value

    for i in range(len(dic)):
        for j in range(len(dic[i][1]['plays'])):
            if j<2:
                answer.append(dic[i][1]['plays'][j][1])
            else: break
        
    return answer