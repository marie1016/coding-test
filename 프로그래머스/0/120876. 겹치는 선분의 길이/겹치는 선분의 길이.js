function solution(lines) {
    const count = Array(201).fill(0);
    
    for (const [start , end] of lines) {
        for (let i = start; i < end; i++) {
            count[i + 100]++;
        }
    }
    return count.filter((v) => v >= 2).length;
}