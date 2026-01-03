function solution(my_string, is_suffix) {
    const arr = Array.from(my_string).map((_,i)=> my_string.substring(i));
    if (arr.includes(is_suffix)) return 1;
    return 0;
}