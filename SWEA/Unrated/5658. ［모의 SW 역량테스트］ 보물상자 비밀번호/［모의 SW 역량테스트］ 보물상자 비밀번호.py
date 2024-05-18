T = int(input())

for test_case in range(1, T + 1):
    N,K = list(map(int,input().split(" ")))
    numbers = input()
    sets = set()
    line_count = N//4	# 한 변에 있는 숫자 개수
    start = 0

    for _ in range(line_count):
        for i in range(start, N, line_count):
            if i + line_count > N:
                sets.add(int(numbers[i:] + numbers[:(i + line_count) % N],16))
            else:
                sets.add(int(numbers[i:i + line_count],16))
        start +=1
        
    answer = sorted(sets, reverse=True)[K-1]
    print(f"#{test_case} {answer}")
