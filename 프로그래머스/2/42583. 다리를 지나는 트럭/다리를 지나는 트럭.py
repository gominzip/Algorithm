def solution(bridge_length, weight, truck_weights):
    answer = 0
    time = 1
    stack = []
    curr_weight = 0
    while len(truck_weights) > 0 :
        end =0
        for i in range(len(stack)):
            if stack[i][1] == time:
                end += 1
                if i < len(stack) - 1 and stack[i+1][1] > time:
                    break
        del stack[0:end]
        
        curr_weight = sum(item[0] for item in stack)
        if len(stack) < bridge_length:
            truck = 0
            for i in range(min(bridge_length, len(truck_weights))):
                if curr_weight + truck_weights[i] <= weight :
                    stack.append((truck_weights[i],time + bridge_length)) 
                    truck += 1
                    curr_weight += truck_weights[i]
                    break
                else:
                    break
            del truck_weights[0:truck]
        time += 1
    
    answer=stack[-1][1]
    return answer