/*
    스코프(Scope) feat. 실행 컨텍스트(Execution Context)
    Deep dive 에 실행 컨텍스트 자세하게 잘 나와있음

*/

// 전역/ 지역 스코프 vs 블록/함수 레벨 스코프 vs 렉시컬 스코프

/* 전역/ 지역 스코프

*/
'use strict'

let i = 0;
if(true){
    i = 10;
    console.log(i)
}

console.log(i);

function f(){
    let i =1;
    {
        let i = 2;
        console.log(i); // 블럭 레벨 스코프
    }
    console.log(i);// 함수 레벨 스코프
}

f();


function f1(){
    console.log('one');
}
function f2(){
    console.log('two');
}

f2();
f1();
f2();


let fn;
{
    const privateUser = { id : 1, name : 'Hong'};
    fn = () => privateUser;

}

const hong = fn();
hong.age = '30';
console.log(hong);