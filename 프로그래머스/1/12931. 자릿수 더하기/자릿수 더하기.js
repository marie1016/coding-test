function solution(n)
{
   const arr = String(n).split("").map((v) => Number(v));
   return arr.reduce((acc, v) => acc + v);
}