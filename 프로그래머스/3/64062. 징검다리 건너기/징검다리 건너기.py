from collections import defaultdict

def solution(stones, k):
    answer = 0
    n = len(stones)
    life_dic = defaultdict(list)
    for idx, life in enumerate(stones, start=1):
        life_dic[life].append(idx)
    front,back = [*range(-1, n+1)], [*range(1,n+3)]
    
    for life in sorted(life_dic):   # 숫자가 작은 디딤돌부터
        for idx in life_dic[life]:
            if back[idx]-front[idx] > k:    # 앞뒤 디딤돌의 차가 k보다 크다면
                return stones[idx-1]    # 파괴된 돌의 수명 반환
            back[front[idx]] = back[idx]    # 파괴된 돌의 앞뒤를 연결
            front[back[idx]] = front[idx]

    return answer