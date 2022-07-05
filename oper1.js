
// 연산자 - 산술, 논리, 비교, 조건(3항연산자), 쉼표연산자, 비트연산자 등
// 산술 연산자(+, -, *, /, %, 부호, ++, --);
const t = 5;
console.log(3 - -t); // : 8 (부호연산자)
console.log(10 + -t *2); //  0
console.log(-10 * -t * -2); // -100
console.log(2 ** 3 ** 2);

// ex) % 연산자의 우선 순위 증명

console.log(2**2 % 3); // 거듭제곱 먼저 실행 후 나머지 연산 실행
console.log((2 + 2) ** 2 % 5); // 4 ^ 2  % 5 = 16 % 5

console.log(2+2 % 3); // 나머지 연산 후 덧셈
console.log(2-4 % 4);
console.log(6 / 2 % 2); // 3 % 2
console.log(6 * 2 % 5); // 12 % 5
console.log(6 * (2 % 5));

let y = 5;

console.log(y++, ++y);  // log : function(x, y, z ....)

// 가능한 Math의 함수를 쓰고, 괄호를 쓰자.
// 증감 연산자는 가능한 풀어쓰자!! (X++ => x = x+1 / x +=1)

// 3항 연산자/ 조건 연산자

// 조건 ? 

if(y>1){
    console.log('Plural');
}else{
    console.log('Singular');
}

//let a = 1, b = 2;
//let c = (a++, b++);


// 논리 & 비교 연산자 AND/OR/NOT / 단축 평가

//object가 True인 이유 : 주소값이 있어서


const T = true, F = false;
let xx = 1;
console.log(T || xx++, F || xx++, xx);
console.log(T && xx++, F && xx++, xx);

// 비트 연산자 --> 실무에서 권한 관리 할 때 주로 사용

let a = 0b10101, b = 0b1100;
console.log(a & b, a | b, a ^ b, ~b);
console.log((a&b).toString(2), (a|b).toString(2), (a^b).toString(2), (~b).toString(2));

// 권한 관리
const R = 1, W = 2, E = 4;
let auth = parseInt('011',2);
const hasWriteAuth = auth & W;
const hasExeAuth = auth & E;
const hasReadAndExeAuth = auth & (R|E);
auth = auth ^ E;



const infi = Number.isNaN(Infinity)
console.log(infi);

console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1));


console.log(Math.round(0.1234,2)); // Math.round()는 언제나 정수(integer), 정수 확인은 Number.isInteger() 로 확인!

console.log((0.234).toFixed(2)); // 해당 자릿수 반올림

const f1 = 2.345;
const f2 = -2.345;
console.log(Math.trunc(f1), Math.trunc(f2)); // 연산해야할 갯수에서 많은 차이가 날 경우 성능 차이가 남
// trunc는 주어진 값의 소수부분을 제거하고 정수부분만 반환
console.log(Math.floor(f1), Math.floor(f2)); // 연산해야할 갯수에서 많은 차이가 날 경우 성능 차이가 남
// floor는 주어진 값과 같거나 작은 정수 중에서 가장 큰 수 반환

console.log(2.5 % 1);
console.log(2.4 % 1);
console.log(2.4 % 1 === 0.4);
console.log((2.4 % 1, 2.4 % 1 === 0.4))



for(let i = 0.1; i<1; i = Number((i+0.1).toFixed(1))){
    console.log(i, typeof i, typeof (i+0.1).toFixed(1));
}

//성호님 답
for(let i = 0.1; i<1; i = (i*10 + 0.1 * 10)/10){
    console.log(i, typeof i);
}

let i1 = 0.28, i2 = 0.14;

console.log(i1 * 100);
console.log((i1 * 100 + i2 * 100)/100);