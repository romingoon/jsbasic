const random = (min, max) => {
    return Math.floor(((Math.random() * (max - min + 1))) + min);
}

const assertRandom = (min, max) => {
    if (min <= random(min, max) <= max) {
        console.log('통!!', `${min} ~ ${max} 사이 정수 : ${random(min, max)}`);
    } else {
        console.log('불통!!');
    }
}

console.log(assertRandom(1, 10));
console.log(assertRandom(0, 9));
console.log(assertRandom(100, 200));

const lotto = () => {
    const lottoArr = [];

    while (lottoArr.length < 6) {
        let num = Math.floor((Math.random() * 45) + 1);
        if (lottoArr.indexOf(num) == -1) {

            lottoArr.push(num);
        }

    }

    lottoArr.sort(function (a, b) {
        return a - b;
    });
    return lottoArr;
}

console.log('이번주 로또 번호 생성 : ', lotto());

// random 1 ~10 : Math.floor((Math.random() * 10) + 1)
// console.time('1st');
// const obj = {};
// for (let i = 0; i < 1_000_000_000; i += 1) {
//     const r = random(1, 100);
//     obj[r] = (obj[r] ?? 0) + 1;
// }
// console.log(Object.entries(obj));
// const entries = Object.entries(obj);
// entries.sort((a, b) => b[1] - a[1]);
// console.log(entries, entries[0][1] - entries[9][1]);
// console.timeEnd('1st');

// console.log(Math.floor(12.3));
// console.log(Math.floor(-12.3));
// console.log(Math.trunc(12.3))
// console.log(Math.trunc(-12.3));
// console.log(Math.ceil(12.3));
// console.log(Math.ceil(-12.3));
