
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