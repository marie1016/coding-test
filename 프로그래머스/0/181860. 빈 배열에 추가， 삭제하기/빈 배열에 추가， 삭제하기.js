function solution(arr, flag) {
    let array = [];
    for(let i = 0; i < flag.length; i++) {
        if(flag[i]) {
            array = array.concat(Array(arr[i] * 2).fill(arr[i]));
        } else {
            array = array.slice(0, -arr[i]);
        }
    }
    return array;
}