function solution(myStr) {
   const newStr = myStr.replaceAll("b", "c").replaceAll("a", "c").split("c").filter((s) => s);
    
    return newStr.length ? newStr : ["EMPTY"];
}