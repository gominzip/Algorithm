function solution(numbers) {
    var answer = '';
    numbers.sort((a, b) => {
        let strA = a.toString();
        let strB = b.toString();
        return (strB + strA) - (strA + strB);
    });
    
    if (numbers[0]===0) return "0";
    answer = numbers.join('');
    
    return answer;
}