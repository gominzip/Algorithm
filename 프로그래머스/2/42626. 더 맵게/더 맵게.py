import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    count = 0
    
    while len(scoville)>=2 and scoville[0] < K :
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)

        heapq.heappush(scoville,first + (second*2))
        count += 1
    answer = count
    if(scoville[0] < K):
        answer = -1

    return answer