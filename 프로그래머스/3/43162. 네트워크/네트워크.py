def dfs (computers, start, visited):
    visited.append(start)
    for i in range(len(computers[start])):
        if i != start and i not in visited and computers[start][i] == 1:
            dfs(computers, i, visited)
    
def solution(n, computers):
    answer = 0
    visited = []
    for i in range(n):
        if i not in visited:
            dfs(computers, i, visited)
            answer+=1
            
    return answer