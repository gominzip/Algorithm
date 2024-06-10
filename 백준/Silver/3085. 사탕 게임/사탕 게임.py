import sys

input = sys.stdin.readline

N = int(input())
candies = [list(input().rstrip()) for _ in range(N)]

directions = [(0, 1), (1, 0)]

def get_max_length(candies):
    answer = 1
    for row in candies:
        count=1
        for i in range(1,N):
            if row[i] == row[i-1]:
                count +=1
                answer = max(answer,count)
            else:
                count =1

    for column in range(N):
        count=1
        for row in range(1,N):
            if candies[row][column] == candies[row-1][column]:
                count +=1
                answer = max(answer,count)
            else:
                count =1

    return answer

max_candies = 1

for y in range(N):
    for x in range(N):
        for dy, dx in directions:
            ny, nx = y + dy, x + dx
            if 0 <= ny < N and 0 <= nx < N:
                candies[y][x], candies[ny][nx] = candies[ny][nx], candies[y][x]
                max_candies = max(max_candies, get_max_length(candies))
                candies[y][x], candies[ny][nx] = candies[ny][nx], candies[y][x]
                if max_candies == N:
                    break
        if max_candies == N:
            break
    if max_candies == N:
         break

print(max_candies)