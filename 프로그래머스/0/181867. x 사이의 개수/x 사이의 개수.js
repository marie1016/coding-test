function solution(myString) {
    const arr = myString.split("x");
    return arr.map((str) => str.length);
}