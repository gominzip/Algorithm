import sys
input = sys.stdin.readline

N = int(input())
schedules = [list(map(int, input().split())) for _ in range(N)]

schedules.sort(key=lambda x: (x[1],x[0]))

count = 0
time = 0

for [start,end] in schedules:
    if start >= time:
        count +=1
        time = end

print(count)