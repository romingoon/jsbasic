const arr = [1, 2, 3, 4];

const deleteArray = (arr, start, end = arr.length) => {
    // const isLeft = (x) => x => x >= start && x < end;
    // return arr.filter((_, i) => !(isLeft(i)))

    // return arr.filter((_, i) => i < start || i >= end);

    const isDeleteRange = x => x < start || x >= end;
    return arr.filter((_, i) => isDeleteRange(i));
}
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]

const users = [{ id: 1, name: 'Hong' }, { id: 2, name: 'Kim' }, { id: 3, name: 'Lee' }];

const deleteObjectArray = (arr, keyOrIdx, val) => {
    // if (typeof keyOrIdx === 'number')
    //     return arr.filter((_, i) => i !== keyOrIdx);
    // else return arr.filter((obj) => obj[keyOrIdx] !== val);

    const isDeleteByIdx = typeof keyOrIdx === 'number';
    return arr.filter((obj, i) =>
        isDeleteByIdx ? i !== keyOrIdx : obj[keyOrIdx] !== val
    );
}

console.log(deleteObjectArray(users, 2)); // Hong, Kim
console.log(deleteObjectArray(users, 'id', 2)); // Hong, Lee
console.log(deleteObjectArray(users, 'name', 'Lee')); // Hong, Kim
