import sys
from collections import defaultdict

input = sys.stdin.readline
N = int(input())
house = [list(map(int,input()[:N])) for _ in range(N)]

def DFS(y,x,N):
    visited = set()

    def explore(y, x):
        visited.add((y, x))

        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        for dy, dx in directions:
            ny, nx = y + dy, x + dx
            if 0 <= ny < N and 0 <= nx < N and house[ny][nx] == 1 and (ny, nx) not in visited:
                explore(ny, nx)

    explore(y, x)
    return visited

def solution(N, house):
    house_count = []
    group_count = 0
    group = defaultdict()  # 각 집이 속한 단지

    for y in range(N):
        for x in range(N):
            if house[y][x] == 1 and (y,x) not in group: # 단지가 정해지지 않은 집인 경우
                member = DFS(y,x,N)
                house_count.append(len(member))  # 해당 단지의 가구 수
                for m in member:
                    group[m] = group_count    # 속한 단지 업데이트
                group_count +=1

    house_count.sort()
    print(group_count)
    for c in house_count:
        print(c)

solution(N,house)