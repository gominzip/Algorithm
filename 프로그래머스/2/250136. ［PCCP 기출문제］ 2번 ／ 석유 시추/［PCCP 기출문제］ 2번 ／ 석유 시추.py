import sys
sys.setrecursionlimit(10**7)
# 매립 구간 반환
def oilArea(current, land, n, m):
    cy, cx = current
    visited = set([])
    def dfs(cy,cx):
        visited.add((cy,cx))
        for dy, dx in [(cy+1,cx),(cy-1,cx),(cy,cx+1),(cy,cx-1)]:
            if 0<=dy<n and 0<=dx<m and land[dy][dx]==1 and (dy,dx) not in visited:
                dfs(dy,dx)
    dfs(cy,cx)
    return visited

def solution(land):
    n, m = len(land), len(land[0])
    quantity = []
    group = {}
    
    # 매립 그룹 구하기
    for y in range(n):
        for x in range(m):
            if land[y][x] == 1 and (y,x) not in group:
                area = oilArea((y,x), land, n, m)
                for oy,ox in area:
                    group[(oy,ox)] = len(quantity)
                quantity.append(len(area))  # 해당 그룹의 석유량 저장
    # 파이프가 접하는 그룹 구하기
    pipe_groups = [set() for _ in range(m)]
    for y in range(n):
        for x in range(m):
            if (y, x) in group:
                pipe_groups[x].add(group[(y, x)])
    
    # 각 파이프별 최대 석유량 계산
    max_oil = 0
    for pipe in range(m):
        total_oil = sum(quantity[group_id] for group_id in pipe_groups[pipe])
        max_oil = max(max_oil, total_oil)
        
    return max_oil