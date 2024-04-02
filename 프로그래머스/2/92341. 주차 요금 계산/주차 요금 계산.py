import math

def solution(fees, records):
    answer = []
    base_time, base_rate, unit_time, unit_rate = fees
    records_dic = {}
    
    for record in records : # 기록 파싱 과정
        data = record.split() 
        minute = int(data[0][0:2])*60 + int(data[0][3:5])   # 분으로 변환
        
        if data[1] in records_dic:  # 해당 키가 있는 지 확인 후 append
            records_dic[data[1]].append(minute)
        else:
            records_dic[data[1]] = [minute]
    
    records_dic = dict(sorted(records_dic.items()))  # 자동차 번호 오름차순으로
    
    for record in records_dic:
        accumulated_time = 0
        if len(records_dic[record]) % 2 == 1:   # 시간 데이터가 홀수면
            records_dic[record].append(23*60+59)   # 23:59에 출차되었다 간주
            
        for i in range(0,len(records_dic[record]),2):   # 누적 주차시간 계산
            accumulated_time += records_dic[record][i+1] - records_dic[record][i]
            
        if(accumulated_time<=base_time) :
            answer.append(base_rate)
        else :
            fee = base_rate + math.ceil((accumulated_time-base_time)/unit_time)*unit_rate
            answer.append(fee)
                
    return answer