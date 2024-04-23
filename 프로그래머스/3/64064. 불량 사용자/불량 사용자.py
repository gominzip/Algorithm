def find_user(users, banned, path):
    if len(banned) == 0:
        global sets
        path.sort()
        sets.update([tuple(path)])
        return
    
    for user in users:
        if len(banned[0]) == len(user):
            flag = True
            for i in range(len(banned[0])):
                if banned[0][i] != '*' and banned[0][i] != user[i]:
                    flag= False
                    break
            if flag:
                new_users,new_banned,new_path = users[:],banned[:],path[:]
                new_users.remove(user)
                new_banned.remove(banned[0])
                new_path.append(user)
                find_user(new_users,new_banned,new_path)

def solution(user_id, banned_id):
    answer = 0
    global sets
    sets = set()
    
    find_user(user_id, banned_id,[])
    answer = len(sets)
    
    return answer