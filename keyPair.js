const keyPair = (arr, target) => {
  for (let num of arr) {
    const pair1 = target - num;
    const pair2 = target - pair1;
    if (pair1 < pair2 && arr.includes(pair1)) {
      const pairIdx1 = arr.indexOf(pair1);
      const pairIdx2 = arr.indexOf(pair2);
      return [pairIdx1, pairIdx2];
    }
  }
};
console.time('total');
// console.time('1st');
console.log(keyPair([8, 1, 4, 3, 6], 7));
// console.timeEnd('1st');
console.log(keyPair([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair([1, 2, 3, 4, 5], 9)); //[3,4]
console.timeEnd('total');