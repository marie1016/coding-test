function solution(binomial) {
    let arr = binomial.split(" ");
    if(arr[1] === "+") return arr[0]/1 + arr[2]/1;
    if(arr[1] === "-") return arr[0]/1 - arr[2]/1;
    return arr[0]/1 * arr[2]/1;
}