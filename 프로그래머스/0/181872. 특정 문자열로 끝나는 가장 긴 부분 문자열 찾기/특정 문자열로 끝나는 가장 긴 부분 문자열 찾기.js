function solution(myString, pat) {
    const a = myString.lastIndexOf(pat);
    return myString.slice(0 , a) + pat;
}