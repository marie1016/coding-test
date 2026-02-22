function solution(s) {
    const len = s.length;
    if(len !== 4 && len !== 6) return false;
    
    for(let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) return false;
    }
    
    return true;
}