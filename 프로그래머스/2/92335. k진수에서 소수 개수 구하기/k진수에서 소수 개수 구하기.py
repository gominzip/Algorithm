# k진수로 변환
def toKnumber(n,k):
    result = []
    while(n>0):
        if n % k <k:
            result.append(str(n % k))
        n = n//k
    # 문자열 형태로 반환
    result = "".join(reversed(result))
    return result

# 소수 판별 - 제곱근으로 범위를 좁혀서 효율성 높임
def isPrime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True
    
def solution(n, k):
    answer = 0
    n = toKnumber(n,k)
    # 0으로 분리해 나온 수, 소수 판별
    for num in n.split('0'):
        if len(num) > 0 and isPrime(int(num)):
            answer +=1
    return answer