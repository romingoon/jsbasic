const keyPair = (arr, target) => {
  let ret = [];
  for (num of arr) {
    const pair1 = target - num;
    const pair2 = target - pair1;
    if (pair1 < pair2 && arr.includes(pair1)) {
      const pairIdx1 = arr.indexOf(pair1);
      const pairIdx2 = arr.indexOf(pair2);
      ret.push(pairIdx1, pairIdx2);
    }
  }
  return ret;
};

console.log(keyPair([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair([1, 2, 3, 4, 5], 9)); //[3,4]
