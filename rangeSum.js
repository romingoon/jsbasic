// const rangeSum = (arr, start, end) => {
//   let sum = 0;
//   for (let i = start; i <= end; i += 1) {
//     sum += arr[i];
//   }
//   return sum;
// };
// console.log(rangeSum(arr, 2, 5));

// const range = (start, end) => arr.slice(start, end);

// const calc = (arr, cb) => {
//   sum = 0;
//   for (let a of arr) {
//     sum += arr[a];
//   }
//   return sum;
// };

//

const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];
const rangeSum = (start, end) => {
  let range = [];
  range = arr.slice(start, end + 1);
  return range.reduce((sum, curr) => (sum += curr));
};
console.log(rangeSum(2, 5)); // 19
console.log(rangeSum(3, 5)); // 15
console.log(rangeSum(1, 4)); // 14
console.log(rangeSum(5, 8)); // 30
console.log(rangeSum(6, 8)); // 22
console.log(rangeSum(2, 8)); // 41
console.log(rangeSum(4, 4)); // 5
