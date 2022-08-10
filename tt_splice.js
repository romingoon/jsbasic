const arrX = [1, 2, 3, 4, 5];

const splice = (arr, idx, delCnt = arr.length - 1, ...items) => {
  idx = idx ? (idx < 0 ? arr.length + idx : idx) : 0;
  const end = Math.min(idx + delCnt, arr.length);

  for (let i = idx; i < arr.length; i++) {
    arr[i] = arr[i + delCnt];
  }
  arr.length -= end - idx;

  if (items.length) {
    for (let i = arr.length - 1; i >= idx; i--) {
      arr[i + items.length] = arr[i];
    }
    for (let i = 0; i < items.length; i++) {
      arr[idx + i] = items[i];
    }
  }
  return arr;
};

const a1 = splice(arrX, 1, 3); // a1 = [1, 5]
console.log("a1=", a1);
const a2 = splice(a1, 1, 0, 2, 3, 4); // a2 = [1, 2, 3, 4, 5]
console.log("a2=", a2);
const a3 = splice(a2, 2); // a3 = [1, 2]
console.log("a3=", a3);
const a4 = splice(a3, 1, 1, 3, 4, 5); // a4 = [1, 3, 4, 5]
console.log("a4=", a4);
const a5 = splice(a4, 2, 2, 7, 8, 9); // a5 = [1, 3, 7, 8, 9]
console.log("a5=", a5);
