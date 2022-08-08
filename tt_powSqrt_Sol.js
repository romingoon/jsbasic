const arr = [1, 4, 9];

const calc = (arr, cb) => {
    const result = [];
    for (let a of arr) {
        result.push(cb(a));
    }
    return result;
}

const powSqrtByForOf = arr => {
    const arrPow = [];
    const arrSqrt = [];
    for (let a of arr) {
        arrPow.push(a ** 2);
        arrSqrt.push(Math.sqrt(a));
    }

    return [arrPow, arrSqrt];
}
const powSqrtByForOf2 = arr => {
    const arrPow = calc(arr, a => a ** 2);
    const arrSqrt = calc(arr, Math.sqrt);

    return [arrPow, arrSqrt];
}

const powSqrtByForEach = arr => {
    const arrPow = Array(arr.length).fill(0);
    const arrSqrt = [];
    arr.forEach((a, i) => {
        arrPow[i] = a ** 2;
        arrSqrt[i] = Math.sqrt(a);
    });
    return [arrPow, arrSqrt]
}

const powSqrtByMap = (arr) =>
    [[...arr.map(a => a ** 2)], [...arr.map(Math.sqrt)]];

console.log(powSqrtByForOf(arr));
console.log(powSqrtByForOf2(arr));
console.log(powSqrtByForEach(arr));
console.log(powSqrtByMap(arr));
