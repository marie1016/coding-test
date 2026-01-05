function solution(my_string) {
    let alp ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let arr = Array.from(alp).fill(0);
    
    my_string.split("").forEach((item)=> {
        arr[alp.indexOf(item)] += 1;});
    return arr;
}