// 예제 20-01

// function foo(){
//     x = 10;
// }

// foo();

// console.log(x); // ? => 10

// 전역 스코프에도 x 변수의 선언이 존재하지 않기 때문에 ReferenceError를 발생시킬 것 같지만
// 자바스크립트 엔진은 암묵적으로 전역 객체에 x 프로퍼티를 동적 생성
// 이러한 현상을 '암묵적 전역(implicit global)'이라 함
// 따라서 반드시 var, let, const 키워드를 사용하여 변수를 선언한 다음 사용해야함!!
// --> 이런 문법적 오류나 실수는 언제나 발생할 수 있다. 


// 그래서 strict mode(엄격모드) 라는 것이 ES5부터 추가 됨
// ESLint 같은 린트 도구를 사용해도 strict mode와 유사한 효과를 얻을 수 있음.

// 예제 20-02
// 'use strict';
// function foo(){
//     x=10; //ReferenceError: x is not defined
// }
// foo();
// console.log(x);
// 전역의 선두, 함수 몸체의 선두에 'use strict'를 추가하면 strict mode가 적용됨

// 전역의 선두에 추가하면 스크립트 전체에, 

//예제 20-03
function foo(){
   'use strict';
    x=10; 
}

y=20;
foo();
console.log(x);
console.log(y);
//함수 몸체의 선두에 추가하면 해당함수와 중첩 함수에 적용



//예제 20-04
// 코드의 선두에 'use strict'를 위치시키지 않으면 strict mode가 제대로 동작하지 않음
// 스코프의 선두에 위치시켜야 함!
// function foo(){
//     x = 10;
//     'use strict';
// 
// }
// foo();
// console.log(x);


//스크립트 단위로 적용된 strict mode는 다른 스크립트에 영향을 주진 않지만
//strict mode 스크립트와 non-strict mode 스크립트를 혼용하는 것은 오류를 발생 시킬 수 있음
//이런 경우를 대비해서 전역에 사용하지 말고 즉시 실행 함수의 선두에 strict mode를 적용

// 함수 단위로 strict mode를 적용하는 것도 피하자
// 어떤 함수는 strict mode를 적용하고 어떤 함수는 strict mode를 적용하지 않는 것은 바람직 하지 않으며
// 모든 함수에 일일이 strict mode를 적용하는 것 또한 번거로운 일 
// 따라서 strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직함

// strict mode를 적용했을 때 에러가 발생하는 사례들!

