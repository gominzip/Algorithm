from collections import defaultdict
def dfs(wire_dic, start, path,group_node):
    flag=True
    for end in wire_dic[start]:
        if end not in path:
            flag = False
            dfs(wire_dic, end, path+[end],group_node)
    if(flag):
        group_node[path[1]-1].update(path[1:])
            
def solution(n, wires):
    answer = -1
    wire_dic = defaultdict(list)
    for wire in wires:
        wire_dic[wire[0]].append(wire[1])
        wire_dic[wire[1]].append(wire[0])
    
    for node in range(1,n+1,1):
        group_node=[set() for _ in range(n)]
        dfs(wire_dic,node,[node],group_node)
        gap = n - 2*(max(len(group) for group in group_node))
        if gap == 0:
            return 0
        if answer==-1 or answer>abs(gap):
            answer=abs(gap)
    
    return answer