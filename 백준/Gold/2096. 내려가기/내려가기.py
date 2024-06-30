import sys

def solution():
    input = sys.stdin.read
    data = input().split()
    
    N = int(data[0])
    
    # 첫 번째 줄의 값으로 초기화
    maxDP = [int(data[1]), int(data[2]), int(data[3])]
    minDP = [int(data[1]), int(data[2]), int(data[3])]
    
    index = 4
    for _ in range(1, N):
        a = int(data[index])
        b = int(data[index + 1])
        c = int(data[index + 2])
        index += 3
        
        new_max0 = max(maxDP[0], maxDP[1]) + a
        new_max1 = max(maxDP[0], maxDP[1], maxDP[2]) + b
        new_max2 = max(maxDP[1], maxDP[2]) + c
        
        new_min0 = min(minDP[0], minDP[1]) + a
        new_min1 = min(minDP[0], minDP[1], minDP[2]) + b
        new_min2 = min(minDP[1], minDP[2]) + c
        
        maxDP[0], maxDP[1], maxDP[2] = new_max0, new_max1, new_max2
        minDP[0], minDP[1], minDP[2] = new_min0, new_min1, new_min2

    print(f"{max(maxDP)} {min(minDP)}")

solution()