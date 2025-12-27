function solution(num_list) {
    const array1 = num_list.filter((item)=>{
     return  item % 2 === 0;
        })
    const array2 = num_list.filter((item)=> {
        return item % 2 === 1;
    })
  return Number(array1.join("")) + Number(array2.join(""));
}