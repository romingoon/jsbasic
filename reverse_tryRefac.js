const a11 = [1, 2, 3, 4, 5];
const a12 = [1, 2, 3, 4, 5];
const a13 = [1, 2, 3, 4, 5];

// const reverseSlice = (arr) => {
//   const newArr = arr.slice().reverse();
//   return newArr;
// };

// console.log(reverseSlice(a11));
// console.log(a11);

// const makeReverseArray = (arr) => {
//   let reverse = [];
//   for (let i = arr.length - 1; i >= 0; i-=1) {
//     reverse.push(arr[i]);
//   }
//   return reverse;
// };

// console.log('makeReverseArray() =', makeReverseArray(a11));
// console.log(a11);



// const mapReverseArray = (arr) => {
//   const maxIdx = arr.length - 1;
//   return arr.map((_, idx) => arr[maxIdx - idx]);
// };
// console.log('mapReversArray = ', mapReverseArray(a11));
// console.log(a11);

// const reverseArray2 = (arr) => {
//   const retArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     retArr[i] = arr[arr.length - i - 1];
//   }
//   return retArr;
// };

// console.log("reverseArray2() = ", reverseArray2(a11));
// console.log(a11);

// // const reverseUnshift = (arr) =>{
// //     for()
// // };
const reverseArrary1 = (arr) => {
  // let tmp;
  for (let i = 0; i < parseInt(arr.length / 2); i++) {
    // tmp = arr[i];
    // arr[i] = arr[arr.length - i - 1];
    // arr[arr.length - i - 1] = tmp;
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  }
  return arr;
};
console.time('1st');
console.log(reverseArrary1(a11));
console.log(a11);
console.timeEnd('1st');

const reverseArrary2 = (arr) => {
  const maxIdx = arr.length
  const maxIdxDiv = parseInt(arr.length / 2);
  // let tmp;
  for (let i = 0; i < maxIdxDiv; i++) {
    [arr[i], arr[maxIdx - i - 1]] = [arr[maxIdx - i - 1], arr[i]];
  }
  return arr;
};

console.time('2st');
console.log(reverseArrary2(a12));
console.log(a12);
console.timeEnd('2st');