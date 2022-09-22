const arr = [1, 2, 3, 4, 5];

/*
 -> 배열의 각 요소를 제곱
 -> 배열 각 요소의 제곱근
 -> 배열의 각 요소를 세제곱
*/

const pow = (a) => a ** 2;
const pow3 = (a) => a ** 3;
const sqrt = (a) => Math.sqrt(a);

const calc = (arr, cb) => {
  const result = [];
  for (let a of arr) {
    result.push(cb(a));
  }
  return result;
};

const ax = [pow, Math.sqrt, pow3].reduce((ret, fn) => calc(arr, fn), arr);

console.log(ax);

const ax2 = [pow, Math.sqrt, pow3].reduce((ret, fn) =>
  ret.map((arr) => fn(arr), arr)
);

console.log(ax2);
