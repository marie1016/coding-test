function solution(names) {
    const answer = names.filter((name, i) => !(i % 5));
    return answer;
}