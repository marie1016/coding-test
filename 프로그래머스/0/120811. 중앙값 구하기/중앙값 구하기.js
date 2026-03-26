function solution(array) {
    array.sort((a, b) => a - b);
    const middle = Math.ceil(array.length / 2);
    return array[middle - 1];
}