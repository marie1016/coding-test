function solution(n) {
    let arr = ["수"];
    for(let i = 1; i < n; i++){
       arr[i - 1] === "수" ? arr.push("박") : arr.push("수");
    }
    return arr.join("");
}