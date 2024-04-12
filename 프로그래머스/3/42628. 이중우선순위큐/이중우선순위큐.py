def solution(operations):
    answer = []
    queue = []
    
    for operation in operations:
        op = operation.split(" ")

        if op[0] == 'I':
            queue.append(int(op[1]))
        else:
            if len(queue):
                if op[1] == '-1':
                    queue.remove(min(queue)) 
                else:
                    queue.remove(max(queue)) 
                
    if len(queue) == 0:
        return [0,0]
    else:
        answer = [max(queue),min(queue)]
    return answer