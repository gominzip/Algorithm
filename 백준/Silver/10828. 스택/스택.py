import sys
input = sys.stdin.readline

N= int(input())
operations = [list(input().split()) for _ in range(N)]

def solution(operations):
    stack = []
    for op in operations:
        result = -1
        if op[0] == 'push':
            stack.append(int(op[1]))
            continue
        elif op[0] == 'pop':
            if stack:
                result = stack.pop()
        elif op[0] == 'size':
            result = len(stack)
        elif op[0] == 'empty':
            result = 1 if not stack else 0
        else:
            if stack:
                result = stack[-1]
        print(result)

solution(operations)