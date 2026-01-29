function solution(arr) {
    let array = [];
    for(const n of arr){
        for(let i = 0; i < n; i++){
            array.push(n);
        }
    }
    return array;
}