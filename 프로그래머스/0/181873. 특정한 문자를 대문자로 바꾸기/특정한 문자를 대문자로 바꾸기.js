function solution(my_string, alp) {
    const arr = my_string.split("").map((s) => s === alp ? s.toUpperCase() : s);
    return arr.join("");
}