function solution(s) {
    let arr = [];
    for (const v of s) {
        if (v === "(") {
            arr.push(v);
        } else if (v === ")") {
            if (arr.length === 0) return false;
            arr.pop();           
        }
    }
    return arr.length === 0 ? true : false;
}