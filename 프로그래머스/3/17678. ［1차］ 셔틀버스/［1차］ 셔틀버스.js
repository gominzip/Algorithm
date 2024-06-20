function solution(n, t, m, timetable) {
    let answer = ""
    let current_bus = 9 * 60; // 첫 버스 시간
    let minute_table = toMinute(timetable);

    let bus_count = 0;
    let passenger_idx = 0;

    while (bus_count < n) {
        let on_board = 0; // 탑승한 승객 수
        while (on_board < m && passenger_idx < minute_table.length && minute_table[passenger_idx] <= current_bus) {
            on_board++;
            passenger_idx++;
        }

        if (bus_count === n - 1) { // 막차인 경우
            if (on_board === m) {
                // 마지막 탑승 승객보다 1분 빨리 도착
                answer = toStrTime(minute_table[passenger_idx - 1] - 1);
            } else {
                answer = toStrTime(current_bus);
            }
        }

        current_bus += t;
        bus_count++;
    }

    return answer;
}

function toMinute(timetable){
    minute_table = [];
    timetable.map(v=>{
        arrival_time = 0
        temp = v.split(':');
        temp.map((v,i)=>{
            v = Number(v);
            i === 0 ? arrival_time += v * 60 : arrival_time += v;
        });
        minute_table.push(arrival_time);
    })
    // 정렬해서 반환
    minute_table.sort((a,b)=> a-b);
    return minute_table;
}

function toStrTime(minute){
    time = [Math.floor(minute/60), minute % 60];
    string = "";
    time.map((v,i)=>{
        string += v < 10 ? '0'+ v: ''+v;
        if(i === 0) string += ':';
    })
    return string;
}