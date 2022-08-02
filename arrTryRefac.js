const range = (start, end, step) => {
  // if ((end !== start && step > 0) || ((end - start) * step < 0))

  if ((start > end && step > 0) || (start < end && step < 0)) return [];

  const arr = [];
  end ?? ((end = start >= 0 ? start : -1), (start = start <= 0 ? start : 1));
  step ?? (step = start === end ? 0 : (step = start > end ? -1 : 1));
  let i = start;

  if (step === 0) arr.push(i);
  else {
    for (; step > 0 ? i <= end : i >= end; i += step) {
      arr.push(i);
    }
  }

  return arr;
};

const assertRange = (start, end, step) => {
  const myRange = range(start, end, step);
  console.log(`range(${start}, ${end}, ${step}) ==> ${myRange}`);
};
console.time("total");
// console.time('1st');

assertRange(1, 10, 1);
assertRange(1, 10, 2);
assertRange(1, 10);
assertRange(10, 1);
assertRange(10, 1, -2);
assertRange(5);
// // assertRange(100);
assertRange(-5);
assertRange(5, 5);
assertRange(5, 5, 0);
assertRange(5, 5, -1);
assertRange(5, 1, 1);
assertRange(1, 5, -1);
assertRange(1, 5, 6);
assertRange(0);
assertRange(0, 0);
assertRange(0, 0, 5);
assertRange(0, 5);
assertRange(0, -1);
assertRange(-3, 0);
assertRange(2, 1, -5);
assertRange(0, -1, -5);

// console.log('---------------------------------');
// console.log("range(1, 10, 1) =", range(1, 10, 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log("range(1, 10, 2) =", range(1, 10, 2)); // [1, 3, 5, 7, 9]

// console.log("range(1, 10) = ", range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log("range(10, 1) = ", range(10, 1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// // console.log('range(1, 10, 0) =', range(1, 10, 0));  // []
// console.log("range(-1, -10, -1) =", range(-1, -10, -1)); // [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]

// console.log("range(0, 20, -1) =", range(0, 20, -1)); // []
// console.log("range(10, 10, 1) = ", range(10, 10, 1)); // [ 10 ]

// console.log("range(10, 1, -1) =", range(10, 1, -1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log("range(10, 1, -2) = ", range(10, 1, -2)); // [ 10, 8, 6, 4, 2 ]
// console.log("range(-10, -5, 1) = ", range(-10, -5, 1)); // [ -10, -9, -8, -7, -6, -5 ]

// console.log("range(20, 0, 5) = ", range(20, 0, 5)); // []

// console.log("range(5) = ", range(5)); // [1, 2, 3, 4, 5]
// console.log("range(-5) = ", range(-5)); // [ ? ]
// console.log("range(5, 5) = ", range(5, 5)); // [ 5 ]
// console.log("range(5, 5, 0) = ", range(5, 5, 0)); // [ 5 ]
// console.log("range(5, 5, -1) = ", range(5, 5, -1)); // [ 5 ]
// console.log("range(5, 1, 1) = ", range(5, 1, 1)); // [ ]
// console.log("range(1, 5, -1) = ", range(1, 5, -1)); // [ ]
// console.log("range(1, 5, 6) = ", range(1, 5, 6)); // [ 1 ]

// console.log("range(0) = ", range(0)); // [ 0 ]
// console.log("range(0, 0) = ", range(0, 0)); // [ 0 ]
// console.log("range(0, 5) = ", range(0, 5)); // [ 0, 1, 2, 3, 4, 5 ]
// console.log("range(0, 0, 5) = ", range(0, 0, 5)); // [ 0 ]
// console.log("range(0, -1) = ", range(0, -1)); // [ 1 ]
// console.log("range(0, -3) = ", range(0, -3)); // [ 0, -1, -2, -3]
// console.log("range(-3, 0) = ", range(-3, 0)); // [ -3, -2, -1, 0 ]
// console.log("range(2, 1, -5) = ", range(2, 1, -5)); // [ 2 ]
// console.log("range(0, -1, -5) = ", range(0, -1, -5)); // [ 0 ]

// console.timeEnd('1st');
console.timeEnd("total");
