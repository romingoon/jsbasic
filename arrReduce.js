
const reduce = (arr, func, iv) => {
    let total = iv ? iv : arr[0]

    for(let [idx] of arr.entries()){ 
                        // obj.entries() : Object.entries() 메서드는 for...in와 같은 순서로 
                        // 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환
        if(idx !== arr.length-1)
        total = func(total, arr[idx + 1]) ;
    }
    return total;
};

console.log(reduce([1,2,3], (a, b) => a + b, 0));
console.log(reduce([1,2,3,4,5], (a,b) => a+b));
console.log(reduce([1,2,3,4,5], (a,b) => a*b, 1));
console.log(reduce([2,2,2], (a,b)=> a*b));


