def solution(participant, completion):
    answer = ''
    result = {}
    
    for p in participant :
        if result.get(p) is None :
            result[p] = 1
        else :
            result[p] += 1  # 동명이인 고려
    
    for c in completion :
        result[c] -= 1  # 완주한 사람은 value가 0
    
    # 딕셔너리 리버스, value로 key 찾기
    reverse = {v:k for k,v in result.items()}
    answer = reverse.get(1)
        
    return answer