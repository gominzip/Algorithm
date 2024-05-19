n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

def is_all_same(arr, color):
    return all(cell == color for row in arr for cell in row)

def divide(arr, n):
    if is_all_same(arr, 1): # 모두 파랑
        return 1, 0
    if is_all_same(arr, 0): # 모두 하양
        return 0, 1
    
    half = n//2
    new_arr = [
         [row[:half] for row in arr[:half]],
         [row[half:] for row in arr[:half]],
         [row[:half] for row in arr[half:]],
         [row[half:] for row in arr[half:]]
        ]

    blue,white = 0,0
    for new in new_arr:
        b,w = divide(new, half)
        blue +=b
        white +=w

    return blue,white  

blue,white = divide(arr,n)
print(f"{white}\n{blue}")