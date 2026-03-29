function solution(array, n) {
    let count = 0;
    for(let item of array) {
        if (item === n) count++;
    }
    return count;
}