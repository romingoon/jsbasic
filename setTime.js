const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(cb, delay, ...args);
    };
};

const throttle = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) return;
        timer = setTimeout(() => {
            cb(...args);
            timer = null;
        }, delay);
    }
}



const rand = (min, max) => {
    const r = Math.floor(((Math.random() * (max - min + 1))) + min)
    console.log(min, max, '==>', r);
}

const dbnc = debounce(rand, 1000);
const thrle = throttle(rand, 1000);

let cnt = 0;

const intl = setInterval(() => {
    cnt += 1;
    dbnc(1, 10);
    thrle(1, 10);
    console.log(cnt);
    if (cnt === 20) clearInterval(intl);
}, 100);

