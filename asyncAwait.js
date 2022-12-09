import fetch from "node-fetch";
const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';


// function getUser(username) {
//     return fetch(`https://api.github.com/users/${username}`)
//         .then(res => res.json())
//         .then(user => user.name);
// }

// async function getUserAll() {
//     let user;
//     user = await getUser('jeresig');
//     console.log(user);

//     user = await getUser('ahejlsberg');
//     console.log(user);

//     user = await getUser('ungmo2');
//     console.log(user);
// }

// getUserAll();

// const getUser2 = async () => {
//     const res = await fetch(sampleUrl);
//     return await res.json();
// }
// // const user = getUser();
// const user11 = getUser2().then(res => console.log('res>>', res));
// console.log('user111>>', user11);


// const user2 = await getUser2();
// console.log('user2>>', user2);

// (async () => console.log(await getUser2()))();
