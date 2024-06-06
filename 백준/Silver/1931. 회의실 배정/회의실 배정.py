N = int(input())
schedules = [list(map(int, input().split())) for _ in range(N)]

schedules.sort(key=lambda x: x[0])    # 시작시간 오름차순
schedules.sort(key=lambda x: x[1])    # 종료시간 오름차순

count = 0
time = 0

for [start,end] in schedules:
    if start >= time:
        count +=1
        time = end

print(count)