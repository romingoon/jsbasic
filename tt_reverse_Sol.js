const a11 = [1, 2, 3, 4, 5];

const makeReverseArray = arr => arr.map((a, i) => arr[arr.length - 1 - i]);

console.log('makeReverseArray ==>', makeReverseArray(a11));

const reverseArray = arr => {
    const maxIdx = arr.length - 1;
    for (let i = 0; i < parseInt(arr.length / 2); i += 1) {
        // const tmp = arr[i];
        // arr[i] = arr[maxIdx-i];
        // arr[maxIdx - i ] = tmp;

        [arr[i], arr[maxIdx - i]] = [arr[maxIdx - i], arr[i]];
    }
};

console.log('reverseArray=', reverseArray(a11));

console.log('a11 =', a11);