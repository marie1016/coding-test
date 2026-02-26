function solution(arr) {
    let answer = [];
    answer.push(arr[0]);
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] === arr[j]) continue;
        if(arr[i] !== arr[j]) {
            answer.push(arr[j])
            i = j; 
        
    }
    }
    return answer;
}