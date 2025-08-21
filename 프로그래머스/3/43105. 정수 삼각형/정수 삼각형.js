function solution(triangle) {
    var answer = 0;
    for(let row = 1; row < triangle.length; row++){
        for(let i = 0; i < triangle[row].length; i++){
            let left = i > 0 ? triangle[row - 1][i - 1] : 0;
            let right = i < triangle[row].length - 1 ? triangle[row - 1][i] : 0;
            triangle[row][i] += Math.max(left, right);
            if(row === triangle.length - 1) answer = Math.max(answer, triangle[row][i]);
        }
    }
    
    return answer;
}