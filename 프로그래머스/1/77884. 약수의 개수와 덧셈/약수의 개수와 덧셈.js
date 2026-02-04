function solution(left, right) {
    let answer = 0;
    const countFunc = (n) => {
        let count = 0;
        for(let i = 1; i <= n; i++) {
            if(n % i === 0) count++;
        }
        return count;
    }
    for(let j = left; j <= right; j++) {
      countFunc(j) % 2 ? answer -= j : answer += j;
    }
    return answer;
}