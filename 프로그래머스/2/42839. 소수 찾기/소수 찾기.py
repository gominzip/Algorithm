def dfs(numbers,lists,path):
    if path == '0':
            return
    if len(path):
        lists.add(int(path))
    
    for i in range(len(numbers)):
        new_path = path[:]
        new_numbers = numbers[:]
        new_path += numbers[i]
        new_numbers.pop(i)
        dfs(new_numbers, lists, new_path)
    
def solution(numbers):
    answer = 0
    numbers = [str(n) for n in numbers]
    lists= set()
    dfs(numbers,lists,"")
    
    for num in lists:
        if num != 0 and num !=1:
            flag = False
            for j in range(2,num):  # 소수 판별
                if num % j == 0:
                    flag=True
                    break
            if flag == False:
                answer +=1
                
    return answer