function solution(price) {
    if (price > 499990) return Math.floor(0.8 * price);
    if (price > 299990) return Math.floor(0.9 * price);
    if (price > 99990) return Math.floor(0.95 * price);
    return price;
}