def solution(numbers):
    answer = ''
    numbers = list(map(str,numbers))
    
    if all(num == '0' for num in numbers) :
        return '0'
    
    numbers.sort(key=lambda x:x*3, reverse=True)
    answer = ''.join(numbers)
    
    return answer