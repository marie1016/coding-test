function solution(numer1, denom1, numer2, denom2) {
    const denom = denom1 * denom2;
    const numer = numer1 * denom2 + numer2 * denom1;
    
    const [min, max] = [denom, numer].sort((a, b) => a - b);
    let arr = [];
    for (let i = 1; i <= min; i++) {
        if (min % i === 0 && max % i === 0) {
            arr.push(i);
        }
    }
    const GCD = Math.max(...arr);
    
    return [numer / GCD, denom / GCD];
}