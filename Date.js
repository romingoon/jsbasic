

const d1 = new Date(0).setDate(2) / 1000;
console.log(d1);//밀리초

const random = (min, max) => {
    return Math.floor(((Math.random() * (max - min + 1))) + min);
}

const today = new Date();

const fivedays = () => {
    const lastDate = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    const dayArr = [];
    while (dayArr.length < 5) {

        const day = random(1, lastDate);
        if (dayArr.indexOf(day) == -1) {
            dayArr.push(new Date(today.getFullYear(), today.getMonth(), day));
        }
    }
    dayArr.sort((a, b) => {
        return b - a;
    });
    return dayArr;
}
console.log(fivedays());

// console.log(lastDate.getDate());
// console.log(d6);
const d4 = new Date(2023, 7, 30);
const WD = '일월화수목금토';
console.log(`${WD[d4.getDay()]}요일`);



const after100days = new Date(today.setDate(today.getDate() + 100));

console.log(after100days);