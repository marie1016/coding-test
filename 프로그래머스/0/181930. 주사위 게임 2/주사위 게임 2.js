function solution(a, b, c) {
    if(a === b && b === c){
        return 27*Math.pow(a,6);
    } else if (a !== b && b !== c && c !== a) {
        return (a+b+c);
    } else {
        return (a+b+c)*(a**2+b**2+c**2);
    }
}