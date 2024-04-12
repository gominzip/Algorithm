def solution(sequence, k):
    total = 0
    for start in range(len(sequence)-1,-1,-1):  # 뒤에서부터 진행
        total += sequence[start]
        if total > k:
            total -= sequence.pop() # 맨 끝자리 불필요
        if total == k:
            # 앞의 숫자가 중복일시
            while start > 0 and sequence[start-1] == sequence[-1]:
                start-=1
                sequence.pop()
            return([start,len(sequence)-1])