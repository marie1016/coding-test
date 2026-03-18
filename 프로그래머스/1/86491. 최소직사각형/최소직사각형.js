function solution(sizes) {
    const array = sizes.map((size) => size.sort((a ,b) => a - b));
    const a = Math.max(...array.map((arr) => arr[0]));
    const b = Math.max(...array.map((arr) => arr[1]));
    return a * b;
}