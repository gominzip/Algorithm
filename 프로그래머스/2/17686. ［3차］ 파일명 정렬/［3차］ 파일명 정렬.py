import re
def solution(files):
    answer = []
    dic = []
    
    for file in files:
        temp = re.split('([0-9]+)', file)
        dic.append((file, temp[0].lower(), int(temp[1])))
        
            
    print(dic)
    dic.sort(key=lambda x:x[2])
    dic.sort(key=lambda x:x[1])
    answer = [file[0] for file in dic]
    
    return answer