from collections import defaultdict
def dijkstra(fares, start, n):
    costs = [float('inf')] * (n+1)
    costs[start] = 0
    path = [[0, start]] #[cost, node]
    
    while path:
        curr_cost, curr = path.pop()
        if curr_cost > costs[curr]:
            continue
        for end, f in fares[curr]:
            new_cost = curr_cost + f
            if new_cost < costs[end]:
                costs[end] = new_cost
                path.append([new_cost, end])
                
    return costs
                
def solution(n, s, a, b, fares):
    answer = float('inf')
    fare = defaultdict(list)
    
    for c, d, f in fares:
        fare[c].append((d, f))
        fare[d].append((c, f))
    
    dist_from_s = dijkstra(fare, s, n)
    dist_from_a = dijkstra(fare, a, n)
    dist_from_b = dijkstra(fare, b, n)
    
    for cost_s,cost_a, cost_b in zip(dist_from_s,dist_from_a,dist_from_b):
        total = cost_s+cost_a+cost_b
        if total != float('inf') and total < answer:
            answer = total
    
    return answer