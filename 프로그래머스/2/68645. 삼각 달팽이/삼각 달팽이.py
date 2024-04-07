def solution(n):
    answer = []
    i = 1
    x,y=0,0
    direction = 0
    snail = [[0] * i for i in range(1, n+1)]
    
    while n*n :
        snail[y][x] = i
        i +=1
        if direction == 0 : #down
            if y+1<n and snail[y+1][x] ==0:
                y+=1
            elif x+1<n and snail[y][x+1] == 0:
                x+=1
                direction = 1
            else :
                break
        elif direction == 1: # right
            if x+1<n and snail[y][x+1] == 0:
                x+=1
            elif y-1>0 and x-1>0 and snail[y-1][x-1] == 0:
                y-=1
                x-=1
                direction =2
            else :
                break
        elif direction ==2 : # top
            if y-1>0 and x-1>0 and snail[y-1][x-1] == 0:
                x-=1
                y-=1
            elif y+1<n and snail[y+1][x] ==0:
                y+=1
                direction=0
            else :
                break
        
    answer = sum(snail,[])

    return answer