const keyPair2 = (arr, n) => {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
            if (arr[i] + arr[j] === n) return [i, j];
        }
    }
}

const keyPair = (arr, n) => {
    const diffIdx = [];
    for (let i = 0; i < arr.length; i += 1) {
        const val = arr[i];
        const diff = n - val;
        if (diffIdx[diff])
            return [i, diffIdx[diff]];
        else
            return diffIdx[diff] = i;
    }
};

console.time('total');
console.log(keyPair([1, 4, 45, 6, 10, 8], 16));    // [3, 4]
console.log(keyPair([1, 2, 4, 3, 6], 10));         // [2, 4]
console.log(keyPair([1, 2, 3, 4, 5], 9));          // [3, 4]
console.timeEnd('total');