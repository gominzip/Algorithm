import sys

input = sys.stdin.readline
[N,S] = list(map(int,input().split()))
numbers = list(map(int, input().split()))

answer = 0

def DFS(numbers, sum):
    for i in range(len(numbers)):
        if sum + numbers[i] == S:
            global answer
            answer +=1
        DFS(numbers[i+1:], sum + numbers[i])

DFS(numbers, 0)
print(answer)