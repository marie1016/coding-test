function solution(num_list) {
    let value1 = 1;
    let value2 = 0;
    for(const item of num_list) {
        value1 *= item;
    }
    for(const item of num_list) {
        value2 += item;
    }
    return value1 < value2**2 ? 1 : 0;
}