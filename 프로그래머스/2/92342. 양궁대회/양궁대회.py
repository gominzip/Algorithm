# 게임 결과 반환 (lion이 이기면 점수차, 지면 0)
def gameResult(apeach,lion):
    a_total,l_total = 0,0

    for i in range(11):
        if apeach[i] == 0 and lion[i] == 0:
            continue
        if apeach[i] >= lion[i]:
            a_total += 10 - i
        else :
            l_total += 10 - i
    result = l_total - a_total
    return result if result > 0 else 0

def compareLion(lion, best_lion):
    for i in range(10, -1, -1):
        if lion[i] > best_lion[i]:
            return True
        elif lion[i] < best_lion[i]:
            return False
    return False

def dfs(lion, remain, info, target, answer):
    if remain == 0: # 게임 끝
        result = gameResult(info, lion)
        # 현재 결과랑 점수가 같을 경우 낮은 점수에 더 맞힌 경우를 저장
        if result != 0 and (result > answer[0] or (result == answer[0] and compareLion(lion,answer[1]))):
            answer[0] = result
            answer[1] = lion[:]
        return
    
    for i in range(target+1, len(info)):
        new_lion = lion[:]
        if remain >= info[i]+1:
            new_lion[i] = info[i]+1
            dfs(new_lion, remain - (info[i] + 1), info, i, answer)
        else:
            new_lion[i] = remain
            dfs(new_lion, 0, info, i, answer)
            
def solution(n, info):
    answer = [0, []]
    lion = [0 for _ in range(11)]
    
    dfs(lion, n, info, -1, answer)
    
    return answer[1] if answer[1] else [-1]