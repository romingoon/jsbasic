
// 변수와 상수
a = 1;

var a = 1;
// 식별자와 예약어 

function f(){}

// 객체 : 클래스가 메모리에 노드됐을 때

var j = {id : 2, f:function() {}};


// 인스턴스와 객체 차이점 정리해두기!!

//

const f1 = function(){
    console.log('this is f1');
};

// 할당과 바인딩 차이점 정리해두기
// 바인딩은 링킹만 해주는 것, 링크만 걸어주는 것, 등록해주는 것
// 할당은 값을 세팅해주는 것

// 함수와 클래스의 차이(메서드와의 차이)
// cf. method 
// 함수는 혼자 존재 할 수 있는 것(수학적인 것에 가까움)
// 메서드는 클래스 안에 존재해서 혼자 존재할 수 없음

// 실행 컨텍스트 cf. JVM - 자바의 메모리 실행 영역

// 용어를 명확히 알면 쉬움!! 스스로 정의해보는 것 중요!

/*
    - 변수와 상수
    변수 = 선언 + 식별자 + 타입 + 값 + 스코프 (선언 : var, let, const) - ES6에서는 var를 쓰지 않음

    식별자 규칙 
    - 문자, $, _로 시작(숫자는 처음만 아니라면 사용 가능)
    - $는 주로 DOM에서 사용
    - 파이 문자 같은 유니 코드

*/

class $Dog{};

const d = new $Dog();

// Object/Reference Types
// Primiive/value Type (immutable)

let s = 'xxxxxxxxx'; //&100
let S = new String('xxxxxxxx'); //&200 &300
let N  = Number(200);

s = 'yyyyyy';// &101

//메모리를 정리하는 것은 굉장히 부담스러운 일
// 변경이 제일 부담스럽고, 그 다음이 추가
S = {id : 5, name : 'Hong'}; // &200 - &302
N = Number(300);

console.log('hello world!');
console.log(s, S, N);


s1 = new String('xx');
s2 = 'xx';

console.log(s1 == s2);
console.log(s1 === s2);
console.log(typeof s1);
console.log(typeof s2);

console.log(isNaN(s2));


// Primiive/value Type (immutable)
const x = `My name is ${s2}`; // 개행이 가능 하다. 백틱 안에서 변수 사용 가능
console.log(x);

const sy1 = Symbol('sy');
const sy2 = Symbol('sy');

console.log(sy1);
console.log(sy2);

console.log(sy1 === s2);
console.log(sy1.description === sy2.description); // *.description은 값을 적는 것 아님, 설명을 적는 것.

const b1 = 1;
const b2 = Boolean(1);

console.log(b1);
console.log(!b1, !!b1);
console.log(b2, !b2, !!!b2);

var x5;
console.log(x5);
// undefined 확인, 정리!!

a = 1;
b = a;
a = 2;

console.log(b);

o1 = {id:1};
o2 = o1;
o1.id = 2;

console.log(o2.id);

// 암묵적 형변환(Implicit coercion, Type coercion)

i = 100;
i.toString();

console.log(i.toString());

let u = 'hong'; //primitive 
u.age = 30; // error ?? No! (: 오브젝트 강제 형변환)
console.log(u.age, typeof u); // ? No Error ! But, undefiend

u = 7;
console.log(u); // ?

// 호이스팅 (hoisting) - 코드는 평가된 후 실행된다!

//console.log(i);
//let i = 1; 
// error! why?
// let이나 const는 선언되기 전에 사용되면 안됨!!

let i1;
console.log(i1); // No Error ! why?

// 호이스팅 개념 정리!!

var x7;
console.log(x7);
x7=123;


console.log(x11); // (가)
console.log(y11);
var y11 = 22;
var x11 = (y11 = 10 *20);


console.log(x11,y11);

