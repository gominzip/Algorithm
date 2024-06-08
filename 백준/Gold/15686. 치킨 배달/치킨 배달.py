import sys

input = sys.stdin.readline
[N,M] = list(map(int,input().split()))
map = [list(map(int,input().split())) for _ in range(N)]

# 한 집의 치킨 거리
def house_distance(house, selected):
    minimum = float('inf')
    for fy,fx in selected:
        distance = abs(house[0]-fy) + abs(house[1]-fx)
        if distance < minimum:
            minimum = distance
    return minimum

# 도시의 치킨 거리
def city_distance(houses, selected):
    total = 0
    for house in houses:
        total += house_distance(house, selected)
    return total

def solution(N,M,map):
    global answer
    answer = float('inf')
    houses, franchise = [], []

    for y in range(N):
        for x in range(N):
            if map[y][x] == 1:
                houses.append((y,x))
            elif map[y][x] == 2:
                franchise.append((y,x))

    # 완전탐색으로 M개의 프렌차이즈 선택
    def dfs(selected, franchise):
        global answer
        if len(selected) == M:
            temp = city_distance(houses, selected)
            if temp < answer:
                answer = temp
        for f in range(len(franchise)):
            if franchise[f] not in selected:
                dfs(selected+[franchise[f]], franchise[f+1:])

    dfs([], franchise)
    return answer

print(solution(N,M,map))