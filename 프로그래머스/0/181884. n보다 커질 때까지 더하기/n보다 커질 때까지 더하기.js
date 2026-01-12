function solution(numbers, n) {
    let sum = 0;
    for(const num of numbers) {
       if(sum <= n) {
       sum += num;
    }}
    return sum;
}