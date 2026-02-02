function solution(s) {
    const len = s.length;
    
    if(len % 2) return s.slice(len / 2, len / 2 + 1);
    return s.slice(len / 2 - 1, len / 2 + 1);
}