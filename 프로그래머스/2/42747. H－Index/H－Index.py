def solution(citations):
    citations.sort()
    length = len(citations)
    start, end = 0, 10000
    
    while (start<=end):
        mid = (start+end)//2
        flag = False
        for i in range(length):
            if citations[i]-mid >=0 and length - i >=mid:
                flag = True
        if flag : 
            start = mid+1
        else: 
            end = mid-1
    
    return end