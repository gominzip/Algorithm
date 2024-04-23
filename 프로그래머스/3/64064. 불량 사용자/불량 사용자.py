def find_user(users, banned, path, sets):
    if not banned:
        path.sort()
        return [tuple(path)]
    
    for user in users:
        if len(banned[0]) == len(user):
            flag = True
            for i in range(len(banned[0])):
                if banned[0][i] != '*' and banned[0][i] != user[i]:
                    flag= False
                    break
            if flag:
                new_users = users[:]
                new_users.remove(user)
                result = find_user(new_users,banned[1:],path+[user],sets)
                if result:
                    sets.update(result)

def solution(user_id, banned_id):
    answer = 0
    sets = set()
    
    find_user(user_id, banned_id, [], sets)
    answer = len(sets)
    
    return answer