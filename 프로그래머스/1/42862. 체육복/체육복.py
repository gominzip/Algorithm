def solution(n, lost, reserve):
    # 중복 제거
    new_lost = sorted([l for l in lost if l not in reserve])
    new_reserve = sorted([r for r in reserve if r not in lost])

    answer = n - len(new_lost)
    
    for r in new_reserve:
        if r - 1 in new_lost:
            new_lost.remove(r - 1)
            answer += 1
        elif r + 1 in new_lost:
            new_lost.remove(r + 1)
            answer += 1
            
    return answer