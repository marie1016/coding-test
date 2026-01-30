function solution(arr, divisor) {
    let array = [];
    for(const n of arr) {
        if(n % divisor === 0) {
            array.push(n);
        }
    }
    return array.length ? array.sort((a, b) => a - b) : [-1];
}