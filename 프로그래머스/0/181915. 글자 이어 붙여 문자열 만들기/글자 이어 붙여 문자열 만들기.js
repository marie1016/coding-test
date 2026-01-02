function solution(my_string, index_list) {
    let answer = "";
    for(const item of index_list) {
    answer += my_string[item];
    }
    return answer;
}