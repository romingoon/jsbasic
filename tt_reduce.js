const arr = [1, 2, 3, 4, 5];

const s = [];
const pow = arr.reduce((s, idx) => (s = arr.push(arr[idx] ** 2)));

console.log(pow);
// 결과 => [1, 8, 27, 64, 125];
