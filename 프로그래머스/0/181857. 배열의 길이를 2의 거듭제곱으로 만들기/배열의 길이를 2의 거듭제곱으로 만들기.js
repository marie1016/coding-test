function solution(arr) {
    let i = 0;
    let len = arr.length;
    while(2 ** i < len){
        i++;
    }
    return 2 ** i > len ? arr.concat(Array(2 ** i - len).fill(0)) : arr;
}