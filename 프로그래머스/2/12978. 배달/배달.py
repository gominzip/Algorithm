from collections import defaultdict

def solution(N, road, K):
    answer, roads = {1:0}, defaultdict(set)
    
    for start, end, time in road:
        roads[start].add((end, time))
        roads[end].add((start, time))
        
    def dfs(curr, total_time):
        if total_time > K:
            return
        for end, time in roads[curr]:
            if end in answer and total_time+time >= answer[end]:   # 재방문 불필요
                continue
            elif total_time + time <= K:    # 더 최단 경로일 경우
                answer[end] = total_time + time
                dfs(end, total_time + time)
    dfs(1, 0)
    return len(answer)