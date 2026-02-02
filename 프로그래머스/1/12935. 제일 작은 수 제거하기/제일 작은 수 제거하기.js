function solution(arr) {
    if(arr.length === 1) return [-1];
    return arr.filter((n) => n !== Math.min(...arr));
}