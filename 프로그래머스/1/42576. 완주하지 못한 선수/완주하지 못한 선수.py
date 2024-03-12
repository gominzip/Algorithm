def solution(participant, completion):
    answer = ''
    result = {}
    
    for p in participant :
        if result.get(p) is None :
            result[p] = 1
        else :
            result[p] += 1
    
    for c in completion :
        result[c] -= 1
    
    reverse = {v:k for k,v in result.items()}
    answer = reverse.get(1)
        
    return answer