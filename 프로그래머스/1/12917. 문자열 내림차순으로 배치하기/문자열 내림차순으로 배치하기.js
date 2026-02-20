function solution(s) {
    const upper = [...s].filter((v) => v.toUpperCase() === v).sort().reverse().join("");
    const lower = [...s].filter((v) => v.toLowerCase() === v).sort().reverse().join("");
    
    return lower + upper;
}