function solution(s){
    let pCount = 0;
    let yCount = 0;
    for(const v of s){
        if(v.toLowerCase() === "p") pCount++;
        if(v.toLowerCase() === "y") yCount++;
    }
    if (!pCount && !yCount) return true;
    return pCount === yCount ? true : false;
}