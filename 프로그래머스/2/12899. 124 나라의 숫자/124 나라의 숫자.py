def base3(n,lists):
    a = n // 3
    b = n % 3
    lists.append(b)
    if a < 3:
        if a != 0:
            lists.append(a)
        return lists
    base3(a,lists)

def solution(n):
    answer = ''
    lists = []
    
    base3(n, lists) # 3진법 형태로 변환
    lists.reverse()
    
    while 0 in lists:   # 1,2,4 규칙대로 변환
        if lists[0] == 0:
            lists.pop(0)
        for i in range(len(lists)):
            if lists[i] == 0:
                lists[i] = 4
                lists[i-1] -= 1
                if lists[i-1] == 3:
                    lists[i-1] = 2
                    
    answer = ''.join(str(l) for l in lists)
    return answer