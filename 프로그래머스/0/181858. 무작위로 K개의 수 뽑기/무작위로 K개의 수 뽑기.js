function solution(arr, k) {
    let array = [];
    arr.forEach((n) => {
        if(!array.includes(n)) array.push(n);
    }
 );
    
    if(array.length > k) return array.slice(0, k);
    return array.concat(Array(k - array.length).fill(-1));
}