import re

def dfs(ex_list,priority):
    global answer
    new = ex_list[:]    # 새로 만들어진 수식
    count = 0   # 현재 우선순위인 연산자가 몇 번 계산되었는지 (인덱스 처리용)
    
    if len(ex_list) == 1:
        if abs(ex_list[0]) > answer:
            answer = abs(ex_list[0])
        return
    
    for i in range(1,len(ex_list),2):
        if ex_list[i] == priority[0]:
            temp = 0
            if ex_list[i] == '*':
                temp = new[i-1-(count*2)] * new[i+1-(count*2)]
            elif ex_list[i] == '-':
                temp = new[i-1-(count*2)] - new[i+1-(count*2)]
            else :
                temp = new[i-1-(count*2)] + new[i+1-(count*2)]
            new[i-1-(count*2):i+2-(count*2)] = [temp]
            count+=1
    dfs(new,priority[1:])
    return
            
def solution(expression):
    global answer
    answer = 0
    cases=['+-*','+*-','-+*','-*+','*-+','*+-']
    ex_list = [int(val) if idx % 2 == 0 else val for idx, val in enumerate(re.split('(\D)', expression))]
    
    for case in cases:
        dfs(ex_list, case)
    
    return answer