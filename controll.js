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

for(let i=2; i<=10; i++){    
    console.log(Math.sqrt(i).toFixed(3));

}