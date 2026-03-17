function solution(s) {
    let result = "";
    let index = 0;
    
    for (let char of s) {
        if (char === " ") {
            result += " ";
            index = 0;
        } else {
            result += index % 2 === 0 
            ? char.toUpperCase()
            : char.toLowerCase();
            index++;
        }
    }
    return result;
}