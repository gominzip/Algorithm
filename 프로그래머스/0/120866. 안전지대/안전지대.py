def solution(board):
    path =[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
    answer = 0

    for y in range(len(board)):
        for x in range(len(board)):
            if board[y][x] == 1:
                for p in path:
                    if y+p[0] > -1 and y+p[0] < len(board) and x+p[1] > -1 and x+p[1] < len(board) and board[y+p[0]][x+p[1]] == 0:
                        board[y+p[0]][x+p[1]] = 'X'
                        
    for y in range(len(board)):
        answer += board[y].count(0)
    
    print(board)
    return answer