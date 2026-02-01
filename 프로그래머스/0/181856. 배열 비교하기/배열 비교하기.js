function solution(arr1, arr2) {
    const len = (arr) => arr.length;
    const sum = (arr) => arr.reduce((acc, v) => acc + v);
    if(len(arr1) > len(arr2)) return 1;
    if(len(arr1) < len(arr2)) return -1;
    if(sum(arr1) > sum(arr2)) return 1;
    if(sum(arr1) < sum(arr2)) return -1;
    return 0;
}