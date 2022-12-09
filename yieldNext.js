const afterTime = sec => {
    if (sec < 1 || sec > 3)
        return Promise.reject(new Error('Not valid sec range!!'));
    return new Promise(resolve => setTimeout(resolve, sec * 1000, sec));
}


// afterTime(1)
//     .then(res => console.log('res>>>', res))
//     .catch(console.error);


// const mapResult = [1, 2, 3].map(async (val) => {
//     const r = await afterTime(val);
//     console.log(r);
//     return r;
// })
// console.log('mapResult => ', mapResult);

// function* pAfterTime(sec) {
//     return yield afterTime(sec);
// }

// const pa = pAfterTime(1);
// const n1 = pa.next();
// console.log('n1>>>', n1);

// n1.value
//     .then()


const odds = [1, 2, 3].filter(async val => {
    const r = await afterTime(val);
    console.log(r);
    return r % 2 === 1;
});

console.log('odds ==>', odds);