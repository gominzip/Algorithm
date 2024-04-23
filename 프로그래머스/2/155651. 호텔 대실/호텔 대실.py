def solution(book_time):
    answer = 1
    rooms ={1:0,}
    
    for i in range(len(book_time)): # 입실 순으로 정렬
        book_time[i] = [int(t[:2])*60 + int(t[3:]) for t in book_time[i]]
    book_time = sorted(book_time, key=lambda x: x[0])
    
    for book in book_time:
        min_room = min(rooms, key=rooms.__getitem__)
        if book[0] < rooms[min_room]:
            answer +=1
            rooms[answer] = book[1] + 10
        else :
            rooms[min_room] = book[1] + 10
        
    return answer