def solution(n, times):
    start,end = 1,1000000000*100000
    
    while(start<=end):
        count = 0
        mid = (start+end)//2
        for time in times:
            count += mid//time  # 해당 시간(mid)에 통과할 수 있는 인원
        if count>=n :
            end =mid-1
        else :
            start = mid+1
            
    return start