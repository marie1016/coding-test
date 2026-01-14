function solution(strArr) {
   return strArr.map((str, i) => {
       return i % 2 ? str.toUpperCase() : str.toLowerCase();
   })
}