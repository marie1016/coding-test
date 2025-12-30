function solution(l, r) {
    let sum = 0;
    for(let i = 0; i < String(r).length; i++) {
      sum +=  2 ** i;
    }
    
    let arr = [];
    for(let j = 0; j <= sum; j++) {
        let k = Number(5 * j.toString(2));
        if (l<=k && k<=r){
            arr.push(k);
        }
    }
    return arr.length === 0 ? [-1] : arr;
}