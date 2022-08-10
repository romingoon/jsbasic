// iterable : 순회가능한, 반복가능한 객체
// iterator : 이터러블의 요소를 탐색하기 위한 포인터

// 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜 이터러블로 통일,
//for...of문, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할수 있도록 일원화

// cf. 이터레이션 프로토콜 : 순회가능한 데이터 컬렉션(자료구조)를 만들기 위해
//ECMAScript 사양에 정의하여 미리 약속한 규칙

// 이터러블
// 이터러블 프로토콜을 준수한 객체 -> 이터러블이라 한다.
// 즉, Symbol.iterator를 프로퍼티 키로 사용한 메서드를
//직접 구현하거나 프로토타입 체인을 통해 상속받은 객체를 말함

const isIterable = (v) =>
  v !== null && typeof v[Symbol.iterator] === "function";

console.log(isIterable([])); // true
console.log(isIterable("")); // true
console.log(isIterable(new Map())); //true
console.log(isIterable(new Set())); //true
console.log(isIterable({})); //false

const arr = [1, 2, 3];

//배열은 Array.prototype의 Symbol.iterator 메서드를 상속 받는 이터러블
console.log(Symbol.iterator in arr); // true

// for..of로 순회 가능
for (const item of arr) {
  console.log(item);
}

//스프레드 문법의 대상으로 사용가능
console.log([...arr]); // [1,2,3]

// 배열 디스트럭쳐링 할당의 대상으로 사용 가능
const [a, ...rest] = arr;
console.log(a, rest); // 1, [2,3]

// 문자열에 대해서도 위 기능들 사용 가능

// `for...of`
for (let c of "hello") {
  console.log(c);
}

// spread 연산자
const characters = [..."hello"];
console.log(characters);
// 디스트럭쳐링 할당의 대상
const [c1, ...c2] = "hello";
console.log(c1, c2);

// `Array.from`은 iterable 혹은 array-like 객체를 인수로 받습니다.
const arr3 = Array.from("hello");
console.log(arr3);

const obj = { a: 1, b: 2 };

//일반 객체는 Symbol.iterator 메서드를 구현하거나 상속받지 않음
//--> 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아님!!
// console.log(Symbol.iterator in obj); // false

// for (const item of obj) {
//   console.log(item); // TypeError: obj is not iterable
// }

// const orr = {
//   [Symbol.iterator]() {},
// };

// for (const item of orr) {
//   console.log(item); //TypeError: Result of the Symbol.iterator method is not an object
// }

// console.log({ ...obj }); // 스프레드 프로퍼티 제안은일반 객체에 스프레드 문법의 사용을 허용한다.

// 이터레이터
// 이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환
// 이터러블의 Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖음

// const arr1 = [1, 2, 3];
// const iterator = arr1[Symbol.iterator]();
// console.log("next" in iterator); // true

// 이터레이터의 next 메서드는 이터러블 각 요소를 순회하기위한 포인터 역할함

//next 메서드를 호출하면 이터러블을 순차적으로 한단계씩 순회하며 순회결과를 나타내는
// 이터레이터 리절트 객체를 반환

// console.log(iterator.next()); //{ value: 1, done: false }
// console.log(iterator.next()); //{ value: 2, done: false }
// console.log(iterator.next()); //{ value: 3, done: false }
// console.log(iterator.next()); //{ value: undefined, done: true }
//이터레이터의 next 메서드가 반환하는 이터레이터 리절트 객체의 value 프로퍼티는
// 현재 순회중인 이터러블의 값을 나타냄, done 프로퍼티는 이터러블의 순회 완료 여부를 나타냄

// 빌트인 이터러블
//Array, String, Map, Set, TypedArray, arguments, DOM컬렉션

// for... of문
//for...of문은 for...in문의 형식과 매우 유사

// for...of문은 내부적으로 이터레이터의 next 메서드 호출하여
// 이터러블을 순회하며 next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티 값을
// for...of문의 변수에 할당
// 이터레이터 리절트 객체의 done 프로퍼티 값이 false이면 이터레이터를 계속 순회,
// true이면 이터러블의 순회를 중단

// for (const item of [1, 2, 3]) {
//   console.log(item); // item 변수에 순차적으로 1,2,3이 할당 됨
// }

// 이터레이터를 명시적으로 호출하기
// const iterable = [1, 2, 3];
// const iterators = iterable[Symbol.iterator]();

// for (;;) {
//   const res = iterators.next();

//   if (res.done) break;

//   const item = res.value;
//   console.log(item);
// }

//이터러블과 유사배열 객체

// const arrLike = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
// };
// 유사 배열 객체는 index와 length 프로퍼티를 갖기 때문에 배열처럼 보이는 객체, for문으로 순회 가능
// for (let i = 0; i < arrLike.length; i += 1) {
//   console.log(arrLike[i]);
// }

// for (const item of arrLike) {
//   console.log(item); //TypeError: arrLike is not iterable
// }

// 유사배열객체는 이터러블이 아닌 일반 객체,
// Symbol.iterator 메서드가 없기 떄문에 for...of문으로순회할 수 없음

// 단, arguments, NodeList, HTMLCollection은 유사 배열 객체이면서 이터러블
// -> ES6에서 이터러블이 도입되면서 유사배열 객체인 arguments, NodeList, HTMLCollection 객체에
// Symbol.iterator 메서드를 구현하여 이터러블이 됨.

// 모든 유사 배열 객체가 이터러블은 아님.

// ES6에서 도입된 Array.from 메서드를 사용하여 배열로 간단히 변환할 수 있음
// 이터러블이나 유사배열을 받아 진짜 Array를 만들어줌
// const arr2 = Array.from(arrLike);

// console.log(arr2); // [1,2,3];
// console.log("arr2.pop() =", arr2.pop());

// 사용자 정의 이터러블
// 이터레이션 프로토콜을 준수하지 않는 일반 객체도 이터레이션 프로토콜을 준수하도록 구현하면
// 사용자 정의 이터러블이 됨

// const fibonacci = {
//   [Symbol.iterator]() {
//     let [pre, cur] = [0, 1];
//     const max = 10;

//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur];
//         return { value: cur, done: cur >= max };
//       },
//     };
//   },
// };

// for (const num of fibonacci) {
//   console.log(num); // 1 2 3 5 8
// }

// 수열의 최대값을 외부에서 전달할 수 있도록 수정
// 수열의 최대값을 인수로 전달 받음
// const fibonacciFn = function (max) {
//   let [pre, cur] = [0, 1];

//   //Symbol.iterator 메서드를 구현한 이터러블을 반환.
//   return {
//     [Symbol.iterator]() {
//       return {
//         next() {
//           [pre, cur] = [cur, pre + cur];
//           return { value: cur, done: cur >= max };
//         },
//       };
//     },
//   };
// };

// fibonacciFn(100)은 이터러블을 반환
// for (const num of fibonacciFn(100)) {
//   console.log(num);
// }

// fibonacciFn 함수는 이터러블을 반환
// 이터레이터를 생성하려면 이터러블의 Symbol.iterator 메서드를 호출해야함

// const iterableFibo = fibonacciFn(5);

// const iteratorFibo = iterableFibo[Symbol.iterator]();

// console.log(iteratorFibo.next()); // { value: 1, done: false }
// console.log(iteratorFibo.next()); // { value: 2, done: false }
// console.log(iteratorFibo.next()); // { value: 3, done: false }
// console.log(iteratorFibo.next()); // { value: 5, done: true }
