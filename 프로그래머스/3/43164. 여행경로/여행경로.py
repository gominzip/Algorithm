def dfs(tickets, path, visited, answer):
    if len(path) == len(tickets) + 1:
        return path
    
    for i in range(len(tickets)):
        if tickets[i][0] == path[-1] and not visited[i]:
            visited[i] = True
            result = dfs(tickets, path + [tickets[i][1]], visited, answer)
            if result:
                return result
            visited[i] = False
        
def solution(tickets):
    answer = []
    visited = [False]*len(tickets)
    tickets.sort()
    answer = dfs(tickets, ["ICN"], visited, answer)
    return answer