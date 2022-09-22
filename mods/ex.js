export const A = 100;
export let B = 0;

export const f = () => console.log('This is f()~!');

// module.exports = {
//     f: () => console.log('ex.CJS.default.function!!'),
//     A: 100,
//     B: 0,
//     C: { id: 1, name: 'Hong' },
// };

export const C = {
    user: {
        id: 1,
        name: 'Hong',
    },
};

export default 10;
