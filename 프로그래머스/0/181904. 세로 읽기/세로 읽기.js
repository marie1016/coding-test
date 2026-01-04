function solution(my_string, m, c) {
    let arr = [];
    for (let i = 0; i < my_string.length; i += m) {
        arr.push(my_string.slice(i, i + m));
    }
    
    let answer = "";
    for (const item of arr) {
        answer += item[c-1];
    }
    return answer;
}