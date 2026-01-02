function solution(a, b, c, d) {
    if (a === b && b === c && c === d) return 1111 * a;
    
    if (a === b && b === c && c !== d) return (10 * a + d) ** 2;
    if (a === b && b === d && c !== a) return (10 * a + c) ** 2;
    if (a === c && c === d && d !== b) return (10 * a + b) ** 2;
    if (b === c && c === d && d !== a) return (10 * b + a) ** 2;
    
    if (a === b) return c === d ? (a + c) * Math.abs(a-c) : c * d;
    if (a === c) return b === d ? (a + b) * Math.abs(a-b) : b * d;
    if (a === d) return b === c ? (a + b) * Math.abs(a-b) : b * c;
    
    if (b === c) return a * d;
    if (b === d) return a * c;
    if (c === d) return a * b;
    
    return Math.min(a, b, c, d);
}