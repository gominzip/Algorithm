import sys
import heapq

input = sys.stdin.readline
N = int(input())
heap = []

for _ in range(N):
       numbers = map(int,input().split())
       for num in numbers:
            if len(heap) < N:
                heapq.heappush(heap, num)
            else:
               if heap[0] < num:
                    heapq.heappop(heap)
                    heapq.heappush(heap, num)

print(heap[0])