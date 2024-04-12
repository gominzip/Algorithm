def solution(m, n, board):
    answer = 0
    board_list = [list(row) for row in board]   # 문자열 분해
    
    while True :
        checks = []
        for i in range(0,m-1):
            for j in range(0,n-1):
                # 2x2가 있으면 해당 블록을 checks에 저장
                if board_list[i][j] != None and board_list[i][j] == board_list[i][j+1] and board_list[i][j] == board_list[i+1][j] and board_list[i][j] == board_list[i+1][j+1]:
                    checks.extend([[i,j],[i,j+1],[i+1,j],[i+1,j+1]])
        
        if len(checks) == 0:    # 더이상 삭제할 블록이 없으면 종료
            break
        
        # 중복 블록 제거 및 오름차순 정렬
        checks = list(set(map(tuple, checks)))
        checks = sorted(checks, key=lambda x: x, reverse=False)
    
        for check in checks:    # 블록 옮기기
            board_list[check[0]][check[1]] = None
            if check[0] != 0:
                for c in range(check[0],0,-1):
                    board_list[c][check[1]] = board_list[c-1][check[1]]
                    board_list[c-1][check[1]] = None
            answer +=1          
        
    return answer