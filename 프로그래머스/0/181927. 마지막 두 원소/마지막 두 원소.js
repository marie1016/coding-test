function solution(num_list) {
    const len = num_list.length;
    const a = num_list[len-1];
    const b = num_list[len-2];
    if(a > b) {
      num_list.push(a-b);
    } else {
      num_list.push(2*a);
    }
    return num_list;
}