'use strict';

// 제어문 - 조건 & 반복문


// continue; break; return; 적절히 잘 써야!!

// 제어문
let i = 10;
while(i>0)

i-=1;
console.log(i);

//switch ~ case 문 사이에는 복잡한 조건문이 들어가지 않는 것이 좋음

//ex1) 2~10 사이의 무리수를 출력하시오. -- 과제
/*2 => 1.414
3 => 1.732
5 => 2.2.
...
10 3.xxx
*/

for(let i=2; i<10; i+=1){
    if(i != (Math.sqrt(i).toFixed(3)) ** 2)    {
        console.log( i,  Math.sqrt(i).toFixed(3));
    }
}

// 성호님 solution
console.log('---------------------');

for(let i = 2; i <10; i+=10){
    const r = Math.sqrt(i).toFixed(3);
    if(r - parseInt(r)) console.log(i, r);
}


let i1 = 2;
while(i1<10){
    if(i1 != (Math.sqrt(i1).toFixed(3)) ** 2){
        console.log(i1, Math.sqrt(i1).toFixed(3));
    }
    i1++;
}

const today = new Date();
switch(today.getDay()){
    case 0:
        console.log('오늘은 일요일 입니다.'); 
        break;
    case 1: 
        console.log('오늘은 월요일 입니다.');
        break;    
    case 2: 
        console.log('오늘은 화요일 입니다.');
        break;
    case 3: 
        console.log('오늘은 수요일 입니다.');
        break;
    case 4: 
        console.log('오늘은 목요일 입니다.');
        break;    
    case 5: 
        console.log('오늘은 금요일 입니다.');
        break;
    case 6:
        console.log('오늘은 토요일 입니다.');
        break;    
    }

    let week = new Array('일', '월', '화', '수', '목',' 금','토');
    console.log(`오늘은 ${week[today.getDay()]}요일 입니다.`);
    
    

// 성호님 solution

const weekNum = today.getDay();
const weekName = '일월화수목금토'.charAt(weekNum);
console.log(`오늘은 ${weekName}요일 입니다.`);

console.log(`오늘은 ${'일월화수목금토'[new Date().getDay()]}요일 입니다.`);