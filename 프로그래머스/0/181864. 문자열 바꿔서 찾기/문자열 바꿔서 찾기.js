function solution(myString, pat) {
    const newString = myString.split("").map((s) => {
    if(s === "A") return "B";
    if(s === "B") return "A";
    }).join("");
    return newString.includes(pat) ? 1 : 0;
}