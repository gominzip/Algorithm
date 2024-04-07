def solution(number, k):
    answer = ''
    stack = []

    for num in number:
        while stack and stack[-1] < num and k>0:    # 제거 조건 충족
            stack.pop(-1)
            k -=1
        stack.append(num)
    
    if k > 0:
        stack = stack[:-k]
            
    answer = ''.join(stack)
    return answer