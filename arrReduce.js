
const reduce = (arr, func, iv) => {
    let total = iv ? iv : arr[0];

    for (let [idx] of arr.entries()) {
        // obj.entries() : Object.entries() 메서드는 for...in와 같은 순서로 
        // 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환
        if (idx !== arr.length - 1)
            total = func(total, arr[idx + 1]);
    }
    return total;
};


//console.log(reduce([1,2,3], (a, b) => a + b, 0));
// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1));
// console.log(reduce([2, 2, 2], (a, b) => a * b));
// console.log(reduce([2, 3, 4, 5], (a, b) => a + b));
// console.log(reduce([1, 2, 3], (a, b) => a - b));
// console.log(reduce([1, 2, 3, 'a', 'b', 4], (a, b) => a + b));
// console.log(reduce(['', 1, 2], (a, b) => a + b));
// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b, null));
// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, null));
function prt(fn) {
    console.log(fn);
}

const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c', 4, '4'];
const arr3 = [2, 2, 2];
const arr4 = [3, 3, 3];

// prt(reduce(arr1, (a, b) => a + b, 0));
// prt(reduce(arr2, (a, b) => a + b));
// prt(reduce(arr3, (a, b) => a * b));
// prt(reduce(arr4, (a, b) => a * b, 0));
// prt(reduce(arr1, (a, b) => a * b, 0));


// 성호님 solution


const reducer = (arr, f, initValue) => {
    if (!Array.isArray(arr)) {
        return initValue;
    }
    let i = 0;
    let ret = initValue ?? (i += 1, arr[0]);

    // if (!initValue && initValue !== '') {// '0', undefined, null
    //     ret = arr[0];
    //     i += 1;
    // }
    for (; i < arr.length; i += 1) {
        ret = f(ret, arr[i]);
    }

    return ret;
}

const assertReduce = (arr, f, initValue, expVal) => {
    const myReduce = reducer(arr, f, initValue);

    console.log(arr,
        `${f}, ${initValue} ==> ${myReduce}:${myReduce === expVal && '통!'}`
    );
};



console.time('Total');
console.time('1st');

assertReduce([1, 2, 3], (a, b) => a + b, 0, 6);
assertReduce([1, 2, 3, 4, 5], (a, b) => a + b, undefined, 15);
assertReduce([1, 2, 3, 4, 5], (a, b) => a + b, '', '12345');
assertReduce([1, 2, 3, 4, 5], (a, b) => a + b, null, 15);
assertReduce([1, 2, 3, 4, 5], (a, b) => a * b, 1, 120);
assertReduce([2, 2, 2], (a, b) => a * b, 0, 0);
assertReduce([2, 2, 2], (a, b) => a * b, undefined, 8);
assertReduce([1, 2, 3, 4, 5], (a, b) => a * b, 0, 0);

console.timeEnd('Total');
console.timeEnd('1st');

/* 
1) 함수가 갖는 의미는?  
    코드의 가독성을 높이고 반복/중복을 줄이고, 
    유지보수성, 재사용성을 높이기 위해
    모듈화 수준을 높이기 위해

2) 함수는 작게? 얼마나 작게? 확장을 고려한 함수란?
    중첩 구조가 여러개 생기지 않도록, 
    코드의 깊이가 너무 깊어지지 않게...
    들여쓰기 수준 2단 이하 정도?로
    코드를 읽고 이해하기 쉽도록...
    하나의 함수가 한가지 기능만을 잘 수행하는 것이 좋은 함수라 생각
    -> 처음부터 함수를 이렇게 작성하기는 쉽지 않으나
    일단 짜놓고 최대한 작게 만들려고 분리하는 노력 필요

3) 함수 이름 규칙은? 
    -- 동사 시작, 직관적/기억하기 쉽게
    -- 너무 길지 않게, 직관적으로!

4) 왜 `순수 함수`를 추구해야 하나? 
    -- 순수함수는 이해하는 것 & 검증하는 것이 보다 수윔
    --  비순수 함수는 외부 상태를 변경 하므로, 상태 변화를 추적하기 어려워짐
    -- 외부 상태를 변경하는 부수 효과를 최소화 하여 불변성을 지향해야
    -- 함수 실행 결과 예측을 용이하게 하여 버그 발생 가능성을 줄여야!
5) this는 자유롭게 사용해도 될까? 

    -- this는 자신이 속한 객체 또는 
    -- instance, bind, apply, bind
*/
