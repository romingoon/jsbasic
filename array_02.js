const arr = [1, 4, 9];

const powSqrtByForOf = (arr) => {
  const result = [];
  for (let item of arr) {
    result.push(Math.pow(item, 2));
  }
  for (let item of arr) {
    result.push(Math.sqrt(item));
  }
  return result;
};

const powSqrtByMap = (arr) => {
  const result = [];
  arr.map((item) => result.push(Math.pow(item, 2)));
  arr.map((item) => result.push(Math.sqrt(item)));
  return result;
};

const powSqrtByForEach = (arr) => {
  const pow = [];
  const sqrt = [];
  arr.forEach((item, idx) => {
    pow[idx] = Math.pow(item, 2);
    sqrt[idx] = Math.sqrt(item);
  });
  return {
    pow,
    sqrt,
  };
};

console.log("powSqrtByForOf(arr) = ", powSqrtByForOf(arr)); // [[1,16,81], [1,2,3]]
console.log("powSqrtByForEach(arr) = ", powSqrtByForEach(arr)); // [[1,16,81], [1,2,3]]
console.log("powSqrtByMap(arr) = ", powSqrtByMap(arr)); // [[1,16,81], [1,2,3]]

// push, pop, shift, unshift 순수함수로 작성

const arr2 = [1, 2, 3, 4];

const push = (arr, ...args) => {
  const arr2 = [...args];
  arr = [...arr, ...arr2];
  return arr;
};

const pop = (arr, i) => {
  i = i ?? 0;

  arr.splice(arr[arr.length], i);
  return arr;
};

const unshift = (arr, ...args) => {
  for (let i = 0; i < arr.length; i++) {
    args[args.length] = arr[i];
  }
  arr = args;
  return arr;
};

const shift = (arr, i) => {
  let times = i > arr.length ? i % arr.length : i;
  return arr.concat(arr.splice(0, arr.length - times));
};

console.log(push(arr2, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(pop(arr2)); // [1, 2, 3, 4, 5]
console.log(pop(arr2, 2)); // 2개 팝! => [1, 2, 3]
console.log(unshift(arr2, 0)); // [0, 1, 2]
console.log(unshift(arr2, 7, 8)); // [7, 8, 0, 1, 2]
console.log(shift(arr2)); // [8, 0, 1, 2]
// console.log(shift(arr2, 2)); // [1, 2]

console.log(arr2);

const arr3 = [1, 2, 3, 4];

const deleteArray = (arr, idx) => {
  result = arr.splice(arr[arr.length], idx);
  return result;
};
deleteArray(arr, 2); // [1, 2]
deleteArray(arr, 1, 3); // [1, 4]

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

const deleteObjectArray = (users) => {
  ax = users.filter((users, item, idx) => users.item === idx);
};
console.log(deleteObjectArray(users, 2)); // Hong, Kim
console.log(deleteObjectArray(users, "id", 2)); // Hong, Lee
console.log(deleteObjectArray(users, "name", "Lee")); // Hong, Kim
