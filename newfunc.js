// function Circle(radius){
// 	this.radius = radius;
// 	this.getDiameter = function () {
// 		return 2 * this.radius;
//     };
// }


// //new 연산자 없이 생성자 함수 호출 하면 일반 함수로서 호출됨
// const circle = Circle(5);
// console.log(circle); //undefined

// // 일반함수 내부의 this는 전역 객체 window를 가리킴
// console.log(radius); //5
// console.log(getDiameter()); // 10


// circle.getDiameter();


// // 인스턴스 생성
// const circle1 = new Circle(5); // 반지름이 5인 Circle 객체 생성
// const circle2 = new Circle(10); // 반지름이 10인 Circle 객체 생성

// console.log(circle1.getDiameter()); //10
// console.log(circle2.getDiameter()); //20


// //new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 X
// // 즉, 일반함수로서 호출됨.
// const circle3 = Circle(15);

// console.log(circle3); //undefined -> 일반함수로서 호출된 circle3는 반환문이 없으므로 암묵적으로 undefined를 반환.
// console.log(radius); // 15 -> 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킴

// const circle4 = new Circle(15);
// console.log(circle4); // Circle { radius: 15, getDiameter: [Function (anonymous)] }
// console.log(circle4.getDiameter());

// 함수는 다양한 방식으로 호출될 수 있음

function foo(){
    console.log(this);
}
// 일반적인 함수로서 호출
//전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가리킨다.
foo();

const obj = { foo }; //ES6 프로퍼티 축약 표현

//메서드로서 호출
obj.foo();

// 생성자 함수로서 호출
const inst = new foo();


// 예제 17-07
// // 생성자 함수
// function Circle(radius){
//     //인스턴스 초기화
//     this.radius = radius;
//     this.getDiameter = function (){
//         return 2 * this.radius;
//     };
//     return 100;
// }

// 인스턴스 생성
const circle = new Circle(5); // 반지름이 5인 Circle 객체 생성

console.log(circle); //Circle { radius: 5, getDiameter: [Function (anonymous)] }


// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y){
    return x + y;
}
// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let ins = new add();

// 함수가 객체를 반환하지 않았으므로 반환문이 무시됨. 따라서 빈 객체가 생성되어 반환된다.
console.log(ins); // add{}

// 객체를 반환하는 일반함수
function createUser(name, role){
    return {name, role};
}
// 일반 함수를 new 연산자와 함께 호출
ins = new createUser('Lee', 'admin')

// 함수가 생성한 객체를 반환
console.log(ins);

// 예제 17-19 
// 생성자 함수
function Circle(radius){
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다.
    if(!new.target){
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환함
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출됨.
const circle12 = Circle(5);
console.log(circle12.getDiameter()); // 10

