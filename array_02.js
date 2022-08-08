
const arr = [1, 4, 9];

const powSqrtByForOf = (arr) => {

  const pow = [];
  const sqrt = [];
  for (let item of arr) {
    pow.push(Math.pow(item, 2));
    sqrt.push(Math.sqrt(item));
  }
  return [pow, sqrt]
};

const powSqrtByForEach = (arr) => {
  const pow = [];
  const sqrt = [];
  arr.forEach((item, idx) => {
    pow[idx] = Math.pow(item, 2);
    sqrt[idx] = Math.sqrt(item);
  });
  return [pow, sqrt]
};

const powSqrtByMap = (arr) => {
  const pow = [];
  const sqrt = [];
  arr.map((item) => pow.push(Math.pow(item, 2)));
  arr.map((item) => sqrt.push(Math.sqrt(item)));
  return [pow, sqrt]
};

console.log("powSqrtByForOf(arr) = ", powSqrtByForOf(arr)); // [[1,16,81], [1,2,3]]
console.log("powSqrtByForEach(arr) = ", powSqrtByForEach(arr)); // [[1,16,81], [1,2,3]]
console.log("powSqrtByMap(arr) = ", powSqrtByMap(arr)); // [[1,16,81], [1,2,3]]

// push, pop, shift, unshift 순수함수로 작성

const arr2 = [1, 2, 3, 4];

const push = (arr, ...args) => {
  const newArr = [...arr, ...args];
  return newArr;
};

const pop = (arr, step = 1) => {
  const newArr = [];
  for (let i = 0; i < arr.length - step; i += 1) {
    newArr.push(arr[i]);
  }
  return newArr;
};
// slice/splice
//filter 
const popFilter = (arr, step = 1) => {
  if (arr.length < step) {
    console.log('Empty Array!');
  }
  return arr.filter((_, idx) => idx < arr.length - step);
}
const unshift = (arr, ...args) => {
  for (let i = 0; i < arr.length; i++) {
    args[args.length] = arr[i];
  }
  arr = args;
  return arr;
};

const shift = (arr, i) => {
  let times = i > arr.length ? i % arr.length : i;
  return arr.concat(arr.splice(arr.length - times, 0));
};

console.log(push(arr2, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(pop(arr2)); // [1, 2, 3, 4, 5]
console.log(pop(arr2, 2)); // 2개 팝! => [1, 2, 3]
console.log(unshift(arr2, 0)); // [0, 1, 2]
console.log(unshift(arr2, 7, 8)); // [7, 8, 0, 1, 2]
console.log(shift(arr2)); // [8, 0, 1, 2]
console.log(shift(arr2, 2)); // [1, 2]

console.log(arr2);

const arr3 = [1, 2, 3, 4];

const deleteArray = (arr, start, end = arr.length) => {
  return arr.filter((_, idx) => !(idx >= start && idx < end));
};
console.log(deleteArray(arr3, 2)); // [1, 2]
console.log(deleteArray(arr3, 1, 3)); // [1, 4]

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

const deleteObjectArray = (orr, ...conditions) => {
  const [keyOrIdx, value] = conditions;
  const targetIdx = (!value && value !== 0) ? keyOrIdx : orr.findIndex((obj => obj[keyOrIdx] === value));
  return orr.filter((_, idx) => targetIdx !== idx);
};
console.log(deleteObjectArray(users, 2)); // Hong, Kim
console.log(deleteObjectArray(users, "id", 2)); // Hong, Lee
console.log(deleteObjectArray(users, "name", "Lee")); // Hong, Kim
