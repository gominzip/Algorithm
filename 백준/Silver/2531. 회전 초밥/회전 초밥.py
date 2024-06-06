import sys
from collections import defaultdict

input = sys.stdin.readline

[N,d,k,c] = list(map(int,input().split()))
table = [int(input()) for _ in range(N)]
table += table[:k-1]    # 벨트의 처음과 끝이 이어졌다는 것을 고려

answer = 0
dishCount = 0   # 연속으로 먹은 개수
currDish = defaultdict(lambda:0)   # 먹은 스시에 대한 카운트

for curr in range(0, len(table)):
    dishCount +=1
    sushi = table[curr]
    currDish[sushi] +=1

    if dishCount == k:
        currTypeCount = len(currDish)
        if c not in currDish:   # 쿠폰 스시가 먹은 것에 없으면
            currTypeCount += 1

        if currTypeCount > answer: 
            answer = currTypeCount
            
        if answer == k + 1 : 
            break  # 최대 경우에 도달한 경우

        dishCount -=1
        # 맨 앞의 스시 빼기
        startSushi = table[curr-k+1]
        currDish[startSushi] -= 1
        if currDish[startSushi] == 0:
            currDish.pop(startSushi)
    
print(answer)