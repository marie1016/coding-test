function solution(num_list) {
    if (num_list.length > 10) return num_list.reduce((acc, v) => acc + v);
    return num_list.reduce((acc, v) => acc * v, 1);
}