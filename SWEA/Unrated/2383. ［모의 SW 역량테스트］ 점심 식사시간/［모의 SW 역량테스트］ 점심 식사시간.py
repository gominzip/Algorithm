T = int(input())

# 계단 선택의 모든 경우 구하기
def comb(n, choices):   
    if n == 0: 
        waitList(choices)   # 사람들의 선택이 담긴 배열 전달
        return
    for stair in stairs:
        comb(n-1, choices+[stair])

# 계단별 사람들의 입구 도착 순서를 구하기
def waitList(choices):  
    dic = {}
    time = []
    global answer
    for c, p in zip(choices, person):
        distance = abs(c[0] - p[0]) + abs(c[1] - p[1])
        dic.setdefault(c, []).append(distance)
    for key in dic:
        dic[key].sort() # 도착순서가 빠른 순으로 정렬
        time.append(downStair(key[2], dic[key]))    # 해당 계단을 선택한 사람이 모두 내려가는 시간 구하기
    if max(time) < answer : # 다른 케이스와 완료 시간 비교, 최소 시간으로 answer 저장
        answer= max(time)

# 계단 내려가는 시간 구하기
def downStair(stair_len, list) :    # 계단 길이와 도착 list 받기
    upstairs = []   # 현재 계단 위에 있는 사람들
    time = list[0]+1
    while len(list)>0:
        end =0
        for i in range(len(upstairs)): 
            if upstairs[0] == time: # 계단 내려가기 완료
                end += 1
                if i < len(upstairs) - 1 and upstairs[i+1] > time:
                    break
        del upstairs[0:end]

        go_stairs = 0
        for l in list:
            if len(upstairs) <3 and time >= l+1 :   # 계단 내려가기 시작
                go_stairs +=1
                upstairs.append(time + stair_len)   # 해당 사람의 계단 내려가기가 완료되는 시간 저장
            else : break
        del list[0:go_stairs]
        
        time +=1
        
    return upstairs[-1] # 마지막으로 계단 위에 있는 사람의 완료 시간 반환

for test_case in range(1, T + 1):
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(n)]
    
    answer = float('inf')
    person, stairs = [],[]
    
    for c in range(n):
        for r in range(n):
            if arr[c][r] == 1 : 
                person.append((c,r))
            if arr[c][r] >1 : stairs.append((c,r,arr[c][r]))
    comb(len(person), [])
    
    print(f"#{test_case} {answer}")
