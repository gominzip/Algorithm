T = int(input())

def dfs(curr, customer, curr_cost, home, answer):
    if not customer:	# 모든 고객을 돌았을 때
        return curr_cost + abs(curr[0] - home[0]) + abs(curr[1] - home[1])	# 집까지의 cost 더해서 반환
    for i in range(len(customer)):
        cost = abs(curr[0]-customer[i][0]) + abs(curr[1]-customer[i][1])
        if curr_cost + cost <=answer:
            new_answer = dfs(customer[i], customer[:i]+customer[i+1:], curr_cost + cost, home, answer)
            answer = min(answer, new_answer)
    return answer

for test_case in range(1, T + 1):
    answer = float('inf')
    N = int(input())
    gps = list(map(int,input().split()))
    company, home = gps[0:2],gps[2:4]
    customer = [gps[x:x+2] for x in range(4,len(gps),2)]
    
    answer = dfs(company,customer,0,home, answer)
    print(f"#{test_case} {answer}")
