def dfs(words, path, target):
    global answer
    next_node = []
    if target == path[-1]:
        answer.append(len(path)-1)
    for word in words:
        differ = [word[i] for i in range(len(word)) if word[i]!=path[-1][i]]
        if len(differ) == 1:
            next_node.append(word)
    for node in next_node:
        new_words = words[:]
        new_path = path[:]
        new_words.remove(node)
        new_path.append(node)
        dfs(new_words,new_path,target)

def solution(begin, target, words):
    global answer
    answer = []
    
    if target not in words:
        return 0;
    
    words = [list(w) for w in words]
    begin = [list(begin)]
    target= list(target)
    dfs(words,begin,target)
    
    if len(answer) == 0:
        return 0
    
    return min(answer)