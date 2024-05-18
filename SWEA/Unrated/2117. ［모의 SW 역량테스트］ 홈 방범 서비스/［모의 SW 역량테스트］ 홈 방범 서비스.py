T = int(input())

def bfs(x,y,k,city,N):
    count = 0
    for dx in range(x-k+1, x+k):	# x좌표 범위
        for dy in range(y-k+1, y+k):	# y좌표 범위
            if dx<0 or dx>=N or dy<0 or dy>=N: continue	# 지도를 벗어나는 경우
            depth = abs(x-dx) + abs(y-dy)	# 마름모에서 벗어나는 경우
            if depth < k and city[dy][dx] == 1: count +=1
    return count
                
for test_case in range(1, T + 1):
    N,M = list(map(int,input().split(" ")))
    city = []
    answer,all_house = 0,0

    for _ in range(N):
        temp = list(map(int,input().split(" ")))
        all_house += temp.count(1)	# 전체 집 개수
        city.append(temp)
        
    for k in range(1,23,1):	# 최대 20크기의 도시를 다 덮으려면 k는 최대 22
        profit = k * k+ (k - 1) * (k - 1)
        if all_house*M - profit <0: break	# 전체 집을 덮어도 손해보는 k의 경우는 고려 x
        for i in range(N):
            for j in range(N):
                count = bfs(i,j,k,city,N)	# 시작점(중점)을 바꿔가며 탐색
                if count*M-profit >= 0 and count > answer:	# 조건을 만족하는 최대 집 개수를 저장
                    answer = count

    print(f"#{test_case} {answer}")