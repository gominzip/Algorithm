def hanoi(n,start,via,to):
    global answer
    if n ==1:
        answer.append([start,to])
    else:
        hanoi(n-1, start, to ,via)
        answer.append([start,to])
        hanoi(n-1, via, start ,to)
        
def solution(n):
    global answer
    answer =[]
    hanoi(n, 1,2,3)
    return answer