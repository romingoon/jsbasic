const moment = require('moment');

const today = moment();

console.log(today.format('LLLL'));
console.log(today.format('YYYY-MM-DD'));
console.log(today.format('YYYY-MM-DD HH:mm:ss (dd)'));
console.log(today.format('YYYY-MM-DD HH:mm:ss (dddd)'));

console.log(today.add(3, 'days'));

console.log(moment(new Date(2012, 8, 27)).fromNow());
console.log(moment().diff(moment('2012-09-27'), 'days'));

// const d801 = moment('2022-08-01');
// console.log(d801.format('YY YYYY MMM MMMM Do D DD'));
