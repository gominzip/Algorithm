import sys
sys.setrecursionlimit(100000)

input = sys.stdin.readline
N = int(input())
map = [list(map(int,input().split())) for _ in range(N)]

def DFS(y, x, N, quantity, visited):    # 붙어있는 안전지점 구하기
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    stack = [(y, x)]    # 현재 위치
    while stack:
        cy, cx = stack.pop()
        for dy, dx in directions:
            ny, nx = cy + dy, cx + dx
            if 0 <= ny < N and 0 <= nx < N and map[ny][nx] > quantity and (ny, nx) not in visited:
                visited.add((ny, nx))
                stack.append((ny, nx))

def solution (map, N):
    answer = 0
    quantity = 0
    while(quantity < 100):
        visited = set()
        count = 0

        for y in range(N):
            for x in range(N):
                if map[y][x] > quantity and (y,x) not in visited:
                   visited.add((y, x))
                   DFS(y, x, N, quantity, visited)
                   count +=1    # 안전영역 카운트

        if not visited:    # 안전지점이 안 나오면 break
            break
        answer = max(answer, count)

        quantity+=1
    return answer

print(solution(map, N))