function solution(arr, queries) {
    let answer = [];
    queries.forEach(([s, e, k])=> {
      const arr2 = arr.slice(s, e + 1).filter((item)=> {
          return item > k;
      });
      arr2.length === 0 ? answer.push(-1) : answer.push(Math.min(...arr2));
       })
    return answer;
}