function solution(strArr) {
    const len = Array(31).fill(0);
    for(const s of strArr) len[s.length]++;
    
    return Math.max(...len);
}