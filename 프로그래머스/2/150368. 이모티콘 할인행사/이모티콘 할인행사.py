# 전체 수익 계산
def profit(discount, sale, user_count):
    user_purchase = [0 for _ in range(user_count)]
    plus_user = 0
    
    for d in discount:
        rate, price = d
        for user in sale[rate]:
            user_id, maximum = user
            if user_purchase[user_id] != -1:
                user_purchase[user_id] += price
                # 기준을 넘었을때 플러스 가입자로 변경
                if user_purchase[user_id] >= maximum:
                    plus_user +=1
                    user_purchase[user_id] = -1
                    
    return [plus_user, sum(user_purchase)+plus_user]

# 각 이모티콘별 할인율 탐색
def dfs(discount, emoticons, answer, sale, user_count):
    # 모두 정해졌을때
    if len(discount) == len(emoticons):
        result = profit(discount, sale, user_count)
        # 현재 수익과 비교해서 우수한 것으로 변경
        if (result[0] > answer[0]) or (result[0] == answer[0] and result[1] > answer[1]):
            answer = result[:]    
        return answer
    
    for rate in [0.1,0.2,0.3,0.4]:
        # (이모티콘 할인율, 할인된 가격)
        new = (rate*100, emoticons[len(discount)]*(1-rate))
        answer = dfs(discount+[new],emoticons,answer, sale, user_count)
    return answer
        
def solution(users, emoticons):
    answer = [0,0]
    sale = {10:[],20:[],30:[],40:[]}
    
    # 할인율에 따른 구매자 목록 저장
    for i in range(len(users)):
        rate, maximum = users[i]
        for s in sale:
            if s >= rate:
                sale[s].append((i,maximum))
                
    answer = dfs([],emoticons, answer, sale, len(users))

    return answer