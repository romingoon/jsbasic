import { assertArray } from '../utils/test-utils.js';

const vals = [1, 2, 3];
const randTime = val => {
    const delay = 2;
    console.log('delay>>', delay);
    new Promise(resolve => setTimeout(resolve, Math.random() * 1000, val));
}

const promiseAll = promises => {
    if (promises?.length) return Promise.reject('No Promise!!');

    return new Promise((resolve, reject) => {
        const results = [];
        let pending = promises.length;

        for (let i = 0; i < promises.length; i += 1) {
            promises[i](i + 1)
                .then(res => {
                    results[i] = res;
                    pending -= 1;

                    if (!pending)
                        resolve(results);
                })
                .catch(reject); // catch(err => reject(err))
        }
    });
};


const promiseAll2 = async promises => {
    const results = [];
    for (const promi of promises) {
        const x = promi;
        console.log('x=', x);
        results.push(await promi);
    }
    return results;

}

const promiseAll3 = async promises => {
    return promises.map(async promi => await promi);
}

promiseAll([randTime(), randTime(), randTime()])
    .then(arr => {
        console.table(arr);
        assertArray(arr, vals);
    }).catch(err => console.error('error>>', err));

// promiseAll2([randTime(11), Promise.reject('RRR'), randTime(33)])
//     .then(array => {
//         console.log('여긴 과연 호출될까?!');
//     })
//     .catch(error => {
//         console.log('reject!!!!!!>>', error);
//     });

