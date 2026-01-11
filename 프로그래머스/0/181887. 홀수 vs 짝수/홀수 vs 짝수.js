function solution(num_list) {
    let evenSum = 0;
    let oddSum = 0;
    
    num_list.forEach((n, i) => i % 2 === 1 ? evenSum += n : oddSum += n )
    
    return evenSum > oddSum ? evenSum : oddSum;
}