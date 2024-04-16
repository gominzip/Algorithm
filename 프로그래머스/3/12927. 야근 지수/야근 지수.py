def solution(n, works):
    answer = 0
    dic = {}
    for work in works:
        if work not in dic:
            dic[work] =1
        else : dic[work] +=1
        
    while n>0:
        max_key = max(dic)
        
        if max_key == 0:
            return 0
        
        if dic[max_key] < n:
            n -= dic[max_key]

            if max_key-1 not in dic:
                dic[max_key-1] =dic[max_key]
            else : dic[max_key-1] += dic[max_key]
            
            del dic[max_key]
            
        else:
            dic[max_key] -=n
            
            if max_key-1 not in dic:
                dic[max_key-1] = n
            else : dic[max_key-1] +=n
            
            n = 0
        
    for key in dic:
        answer += (key**2)*dic[key]
    return answer