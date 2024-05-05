from collections import defaultdict
def solution(gems):
    answer = []
    path = defaultdict(lambda : 0)
    gemset = list(set(gems))
    length = len(gems)+1
    start, end = 0,0
    
    while end < len(gems):
        path[gems[end]] += 1    # 현재 경로에 해당 보석이 몇개 들어가 있는지
        end += 1
        
        if len(path) == len(gemset):    # 현재 경로에 모든 보석 종류가 포함된 경우
            while start < end:
                start_gem = gems[start]
                
                if path[start_gem] > 1: # 맨 앞의 요소가 내부에 존재할때
                    path[start_gem] -= 1    # start 지점 뒤로 +1
                    start += 1
                elif end - start < length:
                    length = end - start
                    answer = [start + 1, end]
                    break
                else:
                    break
            
    return answer