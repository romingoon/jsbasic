let n = 100;

let s1 = n.toString();
let s2 = n+ '';

console.log(s1, typeof s1, s2, typeof s2);

const binary = n.toString(2);

console.log(binary, n.toString(8), n.toString(16));
console.log(parseInt(binary,2), parseFloat('3.2cm'), Number('3.2cm'));

const n1 = Number(s1); // Number
const n2 = new Number(s1); // Object
console.log(n1, typeof n1, n2, typeof n2);

const x = 5;
console.log(typeof x, typeof !!x, typeof !!undefined); // True, False --> Truthy, Falsy

const d1 = Date();
const d2 = new Date();
//typeof & .valueOf
console.log(d1, d2, typeof d1, typeof d2); 
console.log(d1.valueOf(), d2.valueOf());

console.log('sss'+2, 'sss'+{id:2});


const u = {id : 1, name : 'hong'};
console.log(u.toString());

r = x + '30'; // 병합 연산자
q = x * '30'; // 산술 연산자
console.log(r, typeof r, q, typeof q);
