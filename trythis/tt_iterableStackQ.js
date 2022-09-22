
// // const routes = new Subway('문래', '신림');
const line2 = [
    "시청",
    "충정로",
    "아현",
    "이대",
    "신촌",
    "홍대입구",
    "합정",
    "당산",
    "영등포구청",
    "문래",
    "신도림",
    "대림",
    "구로디지털단지",
    "신대방",
    "신림",
    "봉천",
    "서울대입구",
    "낙성대",
    "사당",
    "방배",
    "서초",
    "교대",
    "강남",
    "역삼",
    "선릉",
    "삼성",
    "종합운동장",
    "신천",
    "잠실",
    "잠실나루",
    "강변",
    "구의",
    "건대입구",
    "성수",
    "뚝섬",
    "한양대",
    "왕십리",
    "상왕십리",
    "신당",
    "동대문역사문화공원",
    "을지로4가",
    "을지로3가",
    "을지로입구"
]

//     line2[Symbol.iterator] = function(){

//     }


// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());


class Subway {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    // [Symbol.iterator]() {
    //     let idx = line2.indexOf(this.start) - 1;
    //     let done = false;
    //     return {
    //         next: () => {
    //             idx = idx === line2.length - 1 ? 0 : idx + 1;
    //             done = done || line2[idx - 1] === this.end;
    //             return { value: done ? undefined : line2[idx], done }
    //         }
    //     }
    // }
    *[Symbol.iterator]() {

        let idx = line2.indexOf(this.start) - 1;
        let done = false;

        while (!done) {
            idx = idx === line2.length - 1 ? 0 : idx + 1;
            done = done || line2[idx - 1] === this.end;
            yield line2[idx];
        }
    }
}
const route = new Subway('문래', '교대');
// const it = route[Symbol.iterator]();
console.log(it.next());
console.log(it.next('문래'));
console.log(it.next('교대'));
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// const routes2 = new Subway('뚝섬', '잠실');
// const it2 = routes2[Symbol.iterator]();

// console.log([...routes2]);
// while (true) {
//     const x = it2.next();
//     console.log(x);
//     if (x.done) break;
// }
