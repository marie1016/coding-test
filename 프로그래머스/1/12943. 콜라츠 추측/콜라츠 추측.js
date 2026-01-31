function solution(num) {
    let count = 0;
    if (num === 1) return 0;
    
    do {
    num = num % 2 ? num * 3 + 1 : num / 2;
    count++;
    if(num === 1) break;
    } while (count < 500);
    return count === 500 ? -1 : count;
}