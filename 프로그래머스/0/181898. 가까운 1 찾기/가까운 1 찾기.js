function solution(arr, idx) {
    for(let i = 0; i < arr.length; i++) {
    if(idx <= i && arr[i] === 1) {
        return i;
        break;
    } 
    } return -1;
}