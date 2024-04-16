def solution(routes):
    answer = 0
    routes.sort(key=lambda x:x[1])  # 진출 지점 기준 오름차순
    current = -300001
    for route in routes:
        if route[0] > current:
            answer +=1
            current = route[1]
    return answer