const arr = [1, 2, 3, 4, 5];

const splice = (arr, start, end, ...args) => {
    arr.slice()
}

const a1 = splice(arr, 1, 3);         // a1 = [1, 5]
const a2 = splice(a1, 1, 0, 2, 3, 4); // a2 = [1, 2, 3, 4, 5]
const a3 = splice(a2, 2);             // a3 = [1, 2]
const a4 = splice(a3, 1, 1, 3, 4, 5); // a4 = [1, 3, 4, 5]
const a5 = splice(a4, 2, 2, 7, 8, 9); // a5 = [1, 3, 7, 8, 9]