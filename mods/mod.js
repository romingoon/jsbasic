console.log('mod.js');


import { A, B } from './ex.js';

console.log('ex.A =', A);
console.log('ex.B =', B);

import { C } from './ex.js';

const {
    user: { id, name },
} = C;

console.log(C, id, name);

const fff = ({ user: { id, name } }) => console.log('UU>', id, name);

fff(C);

