import sys

input = sys.stdin.readline

string = list(input().rstrip())
M = int(input())
operation = [input().split() for _ in range(M)]

def solution(string,operation):
    left_stack = string
    right_stack = []

    for op in operation:
        if op[0] == 'L' and left_stack:
            right_stack.append(left_stack.pop())
        elif op[0] == 'D' and right_stack:
            left_stack.append(right_stack.pop())
        elif op[0] == 'B' and left_stack:
            left_stack.pop()
        elif op[0] == 'P':
            left_stack.append(op[1])

    return ''.join(left_stack + list(reversed(right_stack)))

print(solution(string,operation))