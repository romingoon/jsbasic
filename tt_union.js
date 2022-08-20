
const A = [1, 2, 3, 4, 5];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

const union = (arrX, arrY) => {
    return new Set([...arrX, ...arrY]);
}

const intersect = (arrX, arrY) => {
    return new Set(arrX.filter(x => arrY.includes(x)));
}

const diff = (arrX, arrY) => {
    return new Set(arrX.filter(x => !arrY.includes(x)));
}

const superSet = (nums) => {
    const result = new Set();

    const dfs = (start = 0, arr = []) => {
        result.add(arr);

        for (let i = start; i < nums.length; i += 1) {
            dfs(i + 1, [...arr, nums[i]]);
        }
    };
    dfs();

    return result;

};
console.log(union(A, B)); // [1, 2, 3, 4, 5, 22, 44]
console.log(union(A, C)); // [1, 2, 3, 4, 5, 11, 222, 555]
// return;

console.log(intersect(A, B)); // [1, 3, 5]
console.log(intersect(A, C)); // [3, 4]
console.log(diff(A, B)); // [2, 4]
console.log(diff(B, A)); // [22, 44]
console.log(diff(A, C)); // [1, 2, 5]
console.log(diff(B, C)); // [1, 22, 44, 5]

const D = [1, 2, 3];
const E = [1, 3];
const isSuperSet = (arrX, arrY) => {
    return arrX.filter(x => arrY.includes(x));
}
console.log(isSuperSet(E, D));
// console.log('B superSet = ', superSet(B));
// console.log('C superSet = ', superSet(C));