function solution(arr, query) {
    query.forEach((n, i) => {
        if(i % 2 === 0) {
        arr = arr.slice(0, n + 1);
    } else {
        arr = arr.slice(n);
    }})
    return arr;
}