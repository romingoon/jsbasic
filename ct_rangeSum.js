const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];
const rangeSum = (start, end) => {
    return arr.reduce((s, a, i) => (i >= start && i <= end ? s + a : s), 0);
};

console.time('total');
console.log(rangeSum(2, 5)); // 19
console.log(rangeSum(3, 5)); // 15
console.log(rangeSum(1, 4)); // 14
console.log(rangeSum(5, 8)); // 30
console.log(rangeSum(6, 8)); // 22
console.log(rangeSum(2, 8)); // 41
console.log(rangeSum(4, 4)); // 5
console.timeEnd('total');