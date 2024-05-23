function solution(sequence, k) {
  var answer = [];
  let total = 0;

  for (let start = sequence.length - 1; start >= 0; start--) {
    total += sequence[start];
    if (total > k) total -= sequence.pop();
    if (total === k) {
      while (
        start > 0 &&
        sequence[start - 1] === sequence[sequence.length - 1]
      ) {
        start--;
        sequence.pop();
      }
      return [start, sequence.length - 1];
    }
  }
  return answer;
}