function solution(num_str) {
    return [...num_str].map((v) => v/1).reduce((acc, v) => acc + v);
}