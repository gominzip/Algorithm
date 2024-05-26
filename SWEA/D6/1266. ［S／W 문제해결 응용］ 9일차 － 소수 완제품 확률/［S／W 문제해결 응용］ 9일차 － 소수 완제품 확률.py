import math

T = int(input())

def comb(n, k):
    return math.factorial(n) // (math.factorial(k) * math.factorial(n - k))

for test_case in range(1, T + 1):
    answer = 1
    max_product = 90//5
    [skillOfMasterA, skillOfMasterB] = [int(x) / 100 for x in input().split()]
    notPrimeNum = [n for n in range(0, max_product +1) if n == 0 or n == 1 or any(n % i == 0 for i in range(2, n))]
    
    for master in [skillOfMasterA, skillOfMasterB]:
        temp = 0
        for np in notPrimeNum:
            combination = comb(max_product, np)
            temp += (master ** np) * ((1 - master) ** (max_product - np)) * combination
        answer *= temp
    answer = 1 - answer
    
    print(f"#{test_case} {answer:.6f}")