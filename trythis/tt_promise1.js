// setTimeout(function () {
//     console.log('depth1', new Date());
//     setTimeout(function () {
//         console.log('depth2', new Date());
//         setTimeout(function () {
//             console.log('depth3', new Date());
//             throw new Error('Already 3-depth!!');
//         }, 3000);
//     }, 2000);
// }, 1000);


// console.log('START!', new Date());


const depthtime = depth => new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log(`depth${depth}`, new Date());
        if (depth > 3) return reject(new Error('Already 3-depth!!'));
        resolve(depth + 1);
    }, depth * 1000);
});

depthtime(1).then(depthtime).then(depthtime).then(depthtime).then(depthtime);

console.log('START!', new Date());