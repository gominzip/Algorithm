import sys

input = sys.stdin.readline

[N,C] = list(map(int,input().split()))
house = sorted([int(input()) for _ in range(N)])

def binarySearch(house, start, end, C):
    while(start<=end):
        mid = (start+end)//2    # 공유기 간의 gap
        count = 1   # 첫 집 공유기 설치
        standard = 0    # 거리 측정을 위한 기준점

        for i in range(len(house)):
            if house[i] - house[standard] >= mid:
                count +=1
                standard = i
        if count < C:
            end = mid-1
        else: start = mid +1

    return (start+end)//2

def solution(house,C):
    mingap = 1
    maxgap = house[-1] - house[0]
    answer = binarySearch(house, mingap, maxgap, C)
    return answer

print(solution(house,C))