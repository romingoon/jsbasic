import fetch from 'node-fetch';

const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';
const myFetch = url =>
    fetch(url).then(response => {
        // console.log('111>>', response);
        // return response.json()
        response.json(); // json()도 비동기 함수다.
    });


myFetch(sampleUrl)
    .then(user => console.log('user>>', user.name))
    .catch(err => console.error('err>>', err));

// myFetch(sampleUrl).then(user => {
//     console.log('user>>>', user);
// });