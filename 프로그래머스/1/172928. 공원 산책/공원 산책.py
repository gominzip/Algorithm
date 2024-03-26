def solution(park, routes):
    answer = []
    width = len(park[0])
    height = len(park)
    start = [0,0]
    # '{이동방향}':[{증가숫자},{증가위치},{기준}]
    direction = {'E':[1,1,width],'S':[1,0,height],'W':[-1,1,width],'N':[-1,0,height]}
    flag = True
    
    for h in range(0,height):   # 시작지점 세팅
        if(flag == False) : 
            break
        for w in range(0,width):
            if(park[h][w] == 'S'):
                start[0]=h
                start[1]=w
                flag = False
                break
                
    temp = start[:]
    
    for direc in routes:
        # 이동 거리만큼 반복
        for i in range(1,int(direc[2])+1,1):    
                j = i * direction[direc[0]][0]
                # 공원 벗어나는지 확인
                if (start[direction[direc[0]][1]] + j >= direction[direc[0]][2] or start[direction[direc[0]][1]] + j < 0): 
                    temp = start
                    break
                if(((direc[0] == 'E')or(direc[0] == 'W')) and ((park[start[0]][start[1]+j] != 'O') and park[start[0]][start[1]+j] != 'S')) or (((direc[0] == 'S')or(direc[0] == 'N'))and ((park[start[0]+j][start[1]] != 'O') and park[start[0]+j][start[1]] != 'S')) : 
                    temp = start
                    break
                else : 
                    temp[direction[direc[0]][1]] += direction[direc[0]][0]
        start = temp[:]
            
    answer = start[:]
    
    return answer