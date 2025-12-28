function solution(numLog) {
    const obj = {
        "1": "w",
        "-1": "s",
        "10": "d",
        "-10": "a"
    }
    let array = [];
    for(let i = 1; i<numLog.length; i++) {
       array.push(obj[String(numLog[i]-numLog[i-1])]);
    }
    return array.join('')
}