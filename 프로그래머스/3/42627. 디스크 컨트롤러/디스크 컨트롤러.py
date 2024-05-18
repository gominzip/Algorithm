import heapq
def solution(jobs):
    answer = 0
    time,count = 0,0
    n = len(jobs)
    jobs.sort()
    heap =[]

    while count < n:  # 모든 jobs가 처리 될 때까지 반복
        
        while jobs and jobs[0][0]<=time:    # 현재 시간내에 요청가능한 작업이면
            start,cost = jobs.pop(0)
            heapq.heappush(heap,(cost,start))   # cost순으로 정렬되도록 heap에 저장
        if heap:    # 처리할 작업이 있을 시
            cost, start = heapq.heappop(heap)
            time +=cost
            answer += time - start  # 작업 소요시간 더하기
            count += 1  # 작업 처리 카운트
        else:   # 현재 처리 가능한 작업이 없으면
            if jobs:
                time = jobs[0][0]   # 시간 건너뛰기
    
    return answer//n
