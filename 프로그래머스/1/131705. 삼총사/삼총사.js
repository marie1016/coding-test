function solution(number) {
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            const a = number[i] + number[j];
            for(let k = j + 1; k < number.length; k++){
                if(number[k] === -a) count++;
            }
        }
    }
    return count;
}