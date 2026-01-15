function solution(myString) {
    return [...myString].map((v) => {
        if (v === "a") return v.toUpperCase();
        if (v === "A") return "A";
        if (v === v.toUpperCase()) return v.toLowerCase();
        return v;
    }).join("");
}