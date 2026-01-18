function solution(s) {
    let answer = [];
    const arr = s.split(' ');
    answer.push(Math.min(...arr));
    answer.push(Math.max(...arr));
    return answer.join(" ");
}