from collections import Counter
def solution(weights):
    answer = 0
    count = Counter(weights)
    
    for c in count:
        answer += count[c]*(count[c]-1)//2  # 같은 몸무게
        answer += count[c]*(count[c*4/2])
        answer += count[c]*(count[c*3/2])
        answer += count[c]*(count[c*4/3])
    return answer