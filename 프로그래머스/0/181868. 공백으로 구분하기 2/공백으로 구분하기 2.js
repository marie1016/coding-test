function solution(my_string) {
    const arr = my_string.split(" ");
    
    return arr.filter((str) => str !== (""));
}