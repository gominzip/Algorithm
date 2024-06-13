def solution(id_list, report, k):
    user_dict = {}
    reported_dict = {}
    
    for id in id_list:
        user_dict[id] = 0
        reported_dict[id] = set()
        
    for r in report:
        user, reported_user = r.split()
        reported_dict[reported_user].add(user)
        
    for user in reported_dict:
        if len(reported_dict[user]) >=k:
            for id in reported_dict[user]:
                user_dict[id] +=1
                
    answer = list(user_dict.values())
    return answer