function* route() {
    const start = yield "출발역은?";
    const end = yield "도착역은?";

    return `${start} 역에서 출발하여 ${end} 역에 도착합니다.`;
}

const it = route();
console.log(it);
console.log(it.next());
console.log(it.next('문래'));
console.log(it.next('신림'));
console.log('----------------------------------');


function* sum() {
    const num1 = yield "첫번째 수?";
    const num2 = yield "두번째 수?";
    return num1 + num2;
}

const it2 = sum();
console.log(it2.next());
console.log(it2.next(1));
console.log(it2.next(2));