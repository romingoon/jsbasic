
const reduce = (arr, func, iv) => {
    let total = iv ? iv : arr[0]

    for(let [idx] of arr.entries()){
        if(idx !== arr.length-1)
        total = func(total, arr[idx + 1]) ;
    }
    return total;
};

console.log(reduce([1,2,3], (a, b) => a + b, 0));
console.log(reduce([1,2,3,4,5], (a,b) => a +b));
console.log(reduce([1,2,3,4,5], (a,b) => a*b, 1));
console.log(reduce([2,2,2], (a,b)=> a*b));


