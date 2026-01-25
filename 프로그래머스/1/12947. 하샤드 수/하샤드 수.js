function solution(x) {
    const sum = (x + "").split("").map((s) => s/1).reduce((acc, v) => acc + v);
    return x % sum ? false : true;
}