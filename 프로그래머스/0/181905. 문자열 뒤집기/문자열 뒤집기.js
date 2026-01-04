function solution(my_string, s, e) {
    const a = my_string.slice(s, e+1);
    return my_string.replace(a, a.split("").reverse().join(""));
}