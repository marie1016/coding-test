function solution(num_list) {
    let count = 0;
    let prev = num_list;
    
    for(let i = 0; i < num_list.length; i++) {
        let n = num_list[i]
        while(n !== 1) {
            n = n % 2 ? (n - 1) / 2 : n / 2;
            count++;
    }
    }
    return count;
}