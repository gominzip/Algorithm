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
def isPrime(num):
    if num <= 1:
        return False
    if num <= 3:
        return True
    if num % 2 == 0 or num % 3 == 0:
        return False
    i = 5
    while i * i <= num:
        if num % i == 0 or num % (i + 2) == 0:
            return False
        i += 6
    return True
    
def solution(n, k):
    answer = 0
    n = toKnumber(n,k)
    # 0으로 분리해 나온 수, 소수 판별
    for num in n.split('0'):
        if len(num) > 0 and isPrime(int(num)):
            answer +=1
    return answer