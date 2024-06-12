def solution(numbers, hand):
    answer = ''
    current = ''
    key = {1:(0,0),2:(0,1),3:(0,2),4:(1,0),5:(1,1),6:(1,2),7:(2,0),8:(2,1),9:(2,2),0:(3,1)}
    left,right = (3,0),(3,2)
    
    for number in numbers:
        if number in [2,5,8,0]:
            ky,kx = key[number]
            ly,lx = left
            ry,rx = right
            l_gap, r_gap = abs(ky-ly) + abs(kx-lx), abs(ky-ry) + abs(kx-rx)
            if l_gap < r_gap:
                current = 'left'
            elif r_gap < l_gap:
                current = 'right'
            else :
                current = hand
        elif number in [1,4,7]:
            current = 'left'
        elif number in [3,6,9]:
            current = 'right'
            
        if current == 'left':
            answer += 'L'
            left = key[number]
        else:
            answer += 'R'
            right = key[number]
            
    return answer