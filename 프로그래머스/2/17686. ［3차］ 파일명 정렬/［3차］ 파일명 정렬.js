function solution(files) {
    var answer = [];
    const sortedFile = [];  // 파일명, HEAD, NUMBER
    
    for (let file of files){
        let f = [file];
        let splitFile = file.split(/(\d+)/);
        f.push(splitFile[0].toLowerCase());
        let number = splitFile[1].length>5?splitFile[1].slice(0,6):splitFile[1];
        f.push(Number(number));
        sortedFile.push(f);
    }
    
    sortedFile.sort((a, b) => {
        // 첫번째 문자 비교정렬
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        // 같으면 숫자 비교정렬
        return a[2] - b[2];
    });
    
    answer = sortedFile.map((value) => value[0]);
    return answer;
}