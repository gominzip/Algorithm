def solution(numbers, target):
    def dfs(index, total):
        if index == len(numbers):
            return 1 if total == target else 0
        
        add_path = dfs(index + 1, total + numbers[index])
        sub_path = dfs(index + 1, total - numbers[index])
        
        return add_path + sub_path
    
    return dfs(0, 0)