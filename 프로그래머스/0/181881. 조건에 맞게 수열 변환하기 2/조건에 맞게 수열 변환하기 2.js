function solution(arr) {
    let count = 0;
    let prev = arr;
    while (true) {
    const next = prev.map((n) => {
        if(n >= 50 && n % 2 === 0) return n / 2;
        if(n < 50 && n % 2 === 1) return 2 * n + 1;
        return n;
    })
    if (prev.every((n, i) => n === next[i])) break;
        
        prev = next;
        count++;
    }
    return count;
}