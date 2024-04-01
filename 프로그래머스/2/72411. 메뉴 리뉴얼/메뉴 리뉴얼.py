def dfs(menus, path, index, result):    # order들의 단품메뉴 조합 구하기
    if len(path) > 1:
        result.append(''.join(path))
    for i in range(index,len(menus)):
        path.append(menus[i])
        dfs(menus, path, i+1, result)
        path.pop()

def solution(orders, course):
    answer = []
    keys = set([])
    combination = {}
    for i in range(0, len(orders)-1,1) :
        for j in range(i+1, len(orders) ,1) :
            menus = list(set(orders[i]).intersection(orders[j]))
            if len(menus) > 1 :
                menus.sort()
                result = []
                dfs(menus, [], 0, result)
                keys.update(result) # 2번 이상 주문된 조합들을 key에 저장
        
    for order in orders :
        for key in keys:    # 해당 조합를 부분집합으로 가지는 주문이 있다면 +1
            if len(set(order).intersection(key)) == len(key):
                if key in combination :
                    combination[key] += 1
                else :
                    combination[key] = 1
    
    for cour in course:     # course에 따라 주문 수가 많은 조합으로 선택
        pick =[]
        count = 0
        for c in combination:
            if len(c) == cour:
                if combination[c] == count :
                    pick.append(c)
                elif combination[c] > count:
                    count = combination[c]
                    pick = [c]
        if len(pick) != 0:
            answer+=(pick)
            
    answer.sort()
    return answer