import fetch from "node-fetch";

const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';

fetch(sampleUrl)
    .then(res => res.json())
    .then(user => console.log(user.name));

// function* pFetch(url) {
//     const res = yield fetch(url);
//     const user = yield res.json();
//     return user.name;
// }

// const pf = pFetch(sampleUrl);
// console.log('pf>>', pf);

// const nextResult = pf.next();
// console.log('nextResult>>', nextResult);
// nextResult.value.then(res => {
//     console.log('res1>>', res);
//     const nr2 = pf.next();
//     console.log('nr2>>', nr2);
//     nr2.value.then(res2 => console.log('res2>>', res2));
//     const userName = pf.next(res2);
//     console.log('userName>>>', user.value);
// });


import co from "co";

function* genFetch2(url, fromFn) {
    const res = yield fetch(url);
    const user = yield res.json();
    return console.log(fromFn, '>>>', user.name);
}

co(genFetch2, 'https://jsonplaceholder.typicode.com/users/1', 'co');