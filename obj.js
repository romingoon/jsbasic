const user = {

    '' : 1,
    ' ' : 1,
    123 : 1,
    true : 1,
    'id' : 1,
    id : 2,
    [Symbol()] : 'Hong', // Unexpected token ':'
    [`name`] : 'hong', //  Unexpected template string
    'my-friends' : ['han', 'kim'], //Unexpected token '-'
    '0y' : '000', //Invalid or unexpected token
    getInfo : () => `${this.id}-${this.name}`,
    getInfo() { return `${this.id}-${this.name}`; },
}


console.log(Object.keys(user), Reflect.ownKeys(user)); // Symbol
console.log(user?.idd + 1);  // NaN

user.addr = 'Seoul';
console.log(user?.addr);

console.log('addr' in user, user.hasOwnProperty('addr'));

for(let x in user) console.log(x);


const s = Symbol();
user[s] = 'xxxx';

console.log(Reflect.ownKeys(user));

console.log(user[s]);
Object.getOwnPropertySymbols(user), Reflect.has(user, 'addr');
//delete user.addr;
//delete user['addr'];
console.log(user.addr); // undefined

// computed property
user[`${user.id}'s name`] = `Mr. ${user.name}`; // user["2's info"]
console.log(Object.keys(user), user["2's name"]);

user.firstName = 'Kildong';
user.lastName = 'Kang';

user.fullName = `${user.firstName} ${user.lastName}`;

console.log(user.fullName);

user.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

console.log('fn=', user.fullName());

user.fullName2 = () =>{   
    return `${user.firstName} ${user.lastName}`;
}

console.log('fn=', user.fullName2());

let { id, name : nm} = user;
console.log(id, nm);

nm = 'kim';

const kim = {id, nm, age : 30};

console.log(kim);

user.addr = 'Busan';

console.log(Object.getOwnPropertyDescriptor(user, 'addr')); 
/* Descriptor = 설명자
    
    {
    value: 'Busan',
    writable: true, // 객체의 프로퍼티가 쓰기 가능한 지의 여부
    enumerable: true, //객체의 프로퍼티가 열거 가능한 지의 여부
    configurable: true // 객체의 프로퍼티가 defineProperty를 통해 설정될 수 있는지 여부
    }
*/

Object.defineProperty(user, 'age', {value : 39, writable : false});
console.log(Object.getOwnPropertyDescriptor(user, 'age')); 
// { value: 39, writable: false, enumerable: false, configurable: false }

for(let x of Object.entries(user)) console.log(`${x[0]} : ${x[1]}`);


const park = Object.fromEntries([
    ['id',  7],
    ['nm', 'park']

]);

console.log(park);

const newUser1 = {...park, age : 30};

newUser1.id = 5;

console.log(newUser1, park);

Object.freeze(user);
console.log(Object.getOwnPropertyDescriptors(user, 'age'));
user.age = 40;
console.log(user.age); // 39

