// 다른 값과 중복되지 않는 유일무이한 값
// Primitive 타입의 값

// const id = new Symbol();
//TypeError: Symbol is not a constructor
// symbol 함수는 생성자 함수로 생성하지 않음. (new 연산자와 함께 호출하지 않음)

// const id = Symbol(); // id는 새로운 심볼이 됨
// console.log(id); // Symbol();
// console.log(typeof id); // symbol

const id = Symbol("id");

console.log(id); //심볼 id 에는 "id"라는 설명이 붙음

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2); // fales
console.log(id1 === id2); //false

// 심볼은 유일성이 보장되는 자료형, 설명이 동일한 심볼 여러개 만들어도 각 심볼 값은 다름
// 심볼에 붙이는 설명(심볼 이름)은 어떤 것에도 영향을 주지 않는 이름표 역할만 함

console.log(id1.description === id2.description); // true

//심볼 값은 암묵적으로 문자열이나 숫자 타입으로 형변환되지 않음

// console.log(id + ""); //TypeError: Cannot convert a Symbol value to a string
// console.log(+id); //TypeError: Cannot convert a Symbol value to a number
// Number(id); //TypeError: Cannot convert a Symbol value to a number

console.log(id1.toString()); //Symbol(id);
// 필요하다면 .toString()을 이용해 명시적으로 메서드를 사용해야함

// 단, 불리언 타입으로는 암묵적 형변환 가능

console.log(!id); // false
// console.log(!!id); // true


// 현실 개발에서 Symbol을 어떻게 사용할 수 있을 것인가?

//고유함, 유일하다는 속성을 이용하여 식별자 또는 리터럴 상수화에 사용


const apiStatus = Object.freeze({
  IDLE: Symbol("IDLE"),
  PENDING: Symbol("PENDING"),
  SUCCESS: Symbol("SUCCESS"),
  ERROR: Symbol("ERROR"),
});

const myApiStatus = apiStatus.IDLE;

if (myApiSatus === apiStatus.IDLE) {
  console.log("API status is IDLE");
}

//객체의 프로퍼티 키로도 사용할될수 있음.

const obj = {
  name: "Moon",
  age: 30,
  [Symbol.for("id")]: 1,
};

console.log(obj[Symbol.for("id")]);

// 심벌 값은 유일무이한 값이므로 심벌값으로 프로퍼티키를 만들면 다른프로퍼티 키와 절대 충돌하지 않음

// 심벌 프로퍼티  - 은닉(Hidden)
// 심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티는
//for...in문이나 Object.keys, Object.getOwnPropertyNames메서드로는 찾을 수 없다

for (const key in obj) {
  console.log(key); // name / age
}

// key가 심벌인 경우에 for...in의대상이 되지 않아서 의도치 않게 프로퍼티가 수정되는 것을 예방할 수 있음

console.log(Object.keys(obj)); // ['name', 'age']
console.log(Object.getOwnPropertyNames(obj)); //['name', 'age']

// ES6에서 도입된 object.getOwnPropertySymbols 메서드를 사용하면 심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티를 찾을 수 잇음

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(id)]

const symbolKey = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[symbolKey]); // 1
console.log(Reflect.ownKeys(obj));
// [ 'name', 'age', Symbol(id) ] ->심볼형 키를 포함한 객체의 모든 키를 반환해줌.

//Symbol의 초기 개발 목적은 private 속성 지원이었다고 함
//하지만 Symbol을 알 수 있는 방법들(예: Object.getOwnPropertySymbols, Reflect.ownKeys)이
//존재하여 사실상 원래 취지에는 맞지 않게 되었음
