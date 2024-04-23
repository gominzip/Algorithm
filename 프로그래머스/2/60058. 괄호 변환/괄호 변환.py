def isRight(p): # '올바른 괄호 문자열'인지 체크
    total = 0
    for i in range(len(p)):
        if p[i] == '(':
            total +=1
        else:
            total -=1
        if total<0:
            return False
    return True
        
def bracket(u,v):
    total = 0
    for i in range(len(u)): # u와 v로 분리
        if u[i] == '(':
            total +=1
        else:
            total -=1
        if total == 0:
            v = u[i+1:]
            u = u[:i+1]
            break
            
    if isRight(u):  # u가 '올바른 괄호 문자열'인 경우
        if not isRight(v):
            v = bracket(v,'')
        return u+v
    elif not isRight(u):  # u가 '올바른 괄호 문자열'이 아닌 경우
        v = bracket(v,'')
        u = u[1:-1] # 양 끝 제거
        u = ''.join([')' if x == '(' else '(' for x in u])  # 괄호 뒤집기
        return "(" + v + ")" + u
        
def solution(p):
    answer = ''
    if p == '': # 입력이 빈 문자열인 경우
        return answer
    answer = bracket(p,'')
    return answer