const a11 = [1, 2, 3, 4, 5];

const reverseSlice = (arr) => {
  const newArr = arr.slice().reverse();
  return newArr;
};

console.log(reverseSlice(a11));
console.log(a11);

const reverseArray = (arr) => {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
};

console.log(reverseArray(a11));
console.log(a11);

const reverseArray2 = (arr) => {
  const retArr = [];
  for (let i = 0; i < arr.length; i++) {
    retArr[i] = arr[arr.length - i - 1];
  }
  return retArr;
};

console.log("reverseArray2(a11) = ", reverseArray2(a11));
console.log(a11);

// // const reverseUnshift = (arr) =>{
// //     for()
// // };
const reverseArr3 = (arr) => {
  const newArr = [];
  let tmp;
  for (let i = 0; i < arr.length; i++) {
    tmp = arr[i];
    newArr[i] = arr[arr.length - i - 1];
    arr[i] = tmp;
  }
  return newArr;
};

console.log(reverseArr3(a11));
console.log(a11);

const makeReverseArray = (arr) => {
  let reverse = arr.reverse();

  return reverse;
};

console.log(makeReverseArray(a11));
console.log(a11);
