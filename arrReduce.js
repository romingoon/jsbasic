
const sum = (arr, func, iv) => {
    let total = iv ? iv : arr[0]

    for(let [idx, el] of arr.entries()){
        if(idx !== arr.length-1)
        total = func(total, arr[idx + 1]) ;
    }
    return total;
};

const a = [1, 2, 3];
console.log(sum(a, (acc, crr) => acc + crr));

