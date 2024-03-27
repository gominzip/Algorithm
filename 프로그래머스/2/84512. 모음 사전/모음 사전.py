def dfs(input_str):
    global str_list 
    alpabet_list = ['A','E','I','O','U']
    str_list.append(input_str)
    for alpabet in alpabet_list : 
        new_str = input_str + alpabet
        if(len(new_str)>5):
            return
        else:
            dfs(new_str)
            
def solution(word):
    global str_list 
    str_list = []
    answer = 0
    dfs('')
    answer = str_list.index(word)
    return answer
