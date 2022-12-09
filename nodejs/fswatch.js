import fs from 'fs';
import { Console } from 'console';

const stdout = fs.createWriteStream('./stdout.log');
const stderr = fs.createWriteStream('./stderr.log');
const logger = new Console({ stdout, stderr });
logger.log('log>>', 'LOG');
logger.error('error>>', 'Err');

// fs.watchFile('./stdout.log', (curr, prev) => {
//     console.log('curr>', curr);
//     console.log('prev>', prev);
// });


import { deptCodes as aa } from './codes.js';
let codes = aa;
const printCodes = () => console.log('codes >>', codes);
printCodes();

fs.watchFile('./codes.js', { interval: 500 }, async () => {
    const deptCodes = (await import(`./codes.js?update=${new Date()}`)).
        deptCodes;
    console.log('code>>', codes);
    printCodes();
});
