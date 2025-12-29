function solution(arr, queries) {
  queries.forEach(([s, e, k])=>{
    arr = arr.map((item, i)=> {
            if(s <= i && i <= e && i % k === 0) {
             return item += 1;
            } return item;
        })
    }) 
    return arr;
} 