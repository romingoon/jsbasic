
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


