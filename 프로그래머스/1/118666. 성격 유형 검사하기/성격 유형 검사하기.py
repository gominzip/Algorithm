def solution(survey, choices):
    answer = ''
    result = { 'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0 }
    count = 0
    
    for s,c in zip(survey, choices) :
        if c < 4:
            result[s[0]] -= c-4
        elif c > 4:
            result[s[1]] += c-4
    
    keys = list(result.keys())

    for i in range(0, len(keys), 2):
        if result[keys[i]] < result[keys[i+1]] :
            answer += keys[i+1]
        else :
            answer += keys[i]
            
    return answer