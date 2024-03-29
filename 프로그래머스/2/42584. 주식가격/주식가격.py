def solution(prices):
    answer = []
    length = len(prices)
    
    for i in range(0, length, 1):
        flag = False
        for j in range(i, length, 1):
            if(prices[i]>prices[j] or i == length-1):
                answer.append(j-i)
                flag = True
                break
        if(flag == False):
            answer.append(length-i-1)
    return answer