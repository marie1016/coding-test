function solution(x1, x2, x3, x4) {
    const func1 = (a, b) => {
        if(a == false && b == false) return false;
        return true;
    }
    
    const func2 = (a, b) => {
        if(a == true && b == true) return true;
        return false;
    }
    return func2(func1(x1, x2), func1(x3, x4));
}