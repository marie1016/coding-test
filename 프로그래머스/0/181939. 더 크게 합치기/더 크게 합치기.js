function solution(a, b) {
    const value1 = String(a)+String(b);
    const value2 = String(b)+String(a);
    if(Number(value1)>=Number(value2)){
        return Number(value1);
    };
    return Number(value2);
}