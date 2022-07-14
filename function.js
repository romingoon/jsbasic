const { sum } = require("lodash");
const { replicate } = require("prelude-ls");

function hello(){
    return 'Hello World';
}

console.log(hello());


function printFnReturnValue(fn){
    console.log(fn.name, fn());
}

console.log(printFnReturnValue(hello));

function f(n){
    if(typeof n === 'object' && Reflect.has(n, 'id')) n.id += 1;
    else n+=1;
}   

let n = 10;
let nobj = {id : 10};

f(n); // typeof number, 순수함수
f(nobj);    // mem-address 전달, typeof object, 비순수 함수
console.log(n, nobj);
// 순수함수 vs 비순수 함수

const user = {id : 1, name : 'Hong'};

function fd1(id, name){
    console.log(`Id is ${id}, Name is ${name}`);
}

function fd2({id, name}){
    console.log(`Id is ${id}, Name is ${name}`);
}

function fd3([id, name]){
    console.log(`Id is ${id}, Name is ${name}`);
}

fd1(user.id, user.name);
fd2(user);
const arr = [2, 'Kim'];
fd3(arr);


// OverLoading vs OverRiding
//function f(a) { 
//    return a + 100; 
//}


function f(a, b = 100) { 
    return a + b; 
}

function f22(a,b){
    return a + (b || 100);
}
console.log('f=', f(10, 20), f(10, 0), f22(10, '')); 

const f1 = function ff(isLast = false) {
    console.log('f1');
    if(!isLast) ff(true);
};
const f2 = function() {
    console.log('f2')
};

f1();
//ff();
f2();
// 재귀함수, 재귀 호출

console.log('----------------------');

(function (){
    console.log('fff');
})(); // 함수명도 필요 없어짐. 전역번수도 아끼고 메모리 낭비도 줄일 수 있음


const counter = (function() { 
    let curr = 0; 
    return {
        inc(n = 1){
            curr +=n;
        }, 
        getCurr: function(){
            return curr;
        },
        dec(n=1){
            curr -=n;
        },
    };
})();
counter.inc(50);
console.log('Curr=',counter.getCurr());
counter.dec(25);
console.log('Curr=',counter.getCurr());

// 화살표 함수
console.log('-----화살표 함수 ----');
const f3 = n => {
    return n * 10;
}

console.log(f3(100));

const f4 = (n, m) =>{
    return n * m;
}

console.log(f4(5, 9));


const f5 = n => console.log(n*10);

f5(10);

const f6 = (n, m) => console.log(n * m);
f6(7, 8);

const obj = {
	name: 'ObjName',
	bark1() {
		console.log('obj.bark=', this.name);
	},
	bark2: () => console.log('obj.bark2=', this.name),
};


obj.bark1();
obj.bark2();

class cls{
    constructor(name){
        this.name = name;
    }
    bark(){
        console.log('bark=', this.name);
    }
}

const c = new cls('kim');
c.bark();
let total = 0;
for (let i = 1; i<=100; i +=1){
    total += i; 