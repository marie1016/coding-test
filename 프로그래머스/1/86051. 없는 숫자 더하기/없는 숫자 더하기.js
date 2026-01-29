function solution(numbers) {
    let sum = 0;
    for(let i = 1; i <= 9 ; i++) {
        sum += i;
        }

    let sum2 = 0;
    for(const n of numbers) {
       sum2 += n;
    }
    return sum - sum2;
}