def find(parent, x):    # 부모 노드 찾기 (속한 집합 찾기)
    if parent[x] == x:
        return x
    parent[x] = find(parent, parent[x])
    return parent[x]

def union(parent, a, b):    # 두 간선 연결 (집합 합치기)
    rootA = find(parent, a)
    rootB = find(parent, b)

    if rootA < rootB:
        parent[rootB] = rootA
    else:
        parent[rootA] = rootB
        
def solution(n, costs):
    answer = 0
    costs.sort(key=lambda x:x[2])   # cost가 적은 경로 순으로
    parent = [x for x in range(n)]
    
    for a,b,cost in costs:
        # 다른 집합에 있을 시에만 연결
        if find(parent,a) != find(parent,b):
            union(parent,a,b)
            answer += cost
            
    return answer