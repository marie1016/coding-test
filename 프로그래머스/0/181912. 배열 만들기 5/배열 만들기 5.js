function solution(intStrs, k, s, l) {
    let answer = [];
    const arr = intStrs.map((value)=> Number(value.slice(s, s+l)));
    for(const item of arr) {
        if(item > k) {
            answer.push(item);
        }
    }            
    return answer;
}