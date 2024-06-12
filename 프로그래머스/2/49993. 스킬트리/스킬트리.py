def solution(skill, skill_trees):
    answer = 0
    skill = list(skill)

    for tree in skill_trees:
        i = 0
        possible = True
        for s in range(len(tree)):
            if tree[s] in skill:
                if tree[s] == skill[i]:
                    i +=1
                else : 
                    possible = False
        if possible:
            answer +=1
        
    return answer