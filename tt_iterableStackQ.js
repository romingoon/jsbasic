
// // const routes = new Subway('문래', '신림');
let line2 = [
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
// // console.log([...it1]);

let range = { // 객체 생성
    from: 1,
    to: 5
};


// 1. for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
range[Symbol.iterator] = function () {

    // Symbol.iterator는 이터레이터 객체를 반환합니다.
    // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
    return {
        current: this.from,
        last: this.to,

        // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
        next() {
            // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
            if (this.current <= this.last) {
                return { done: false, value: this.current++ }; // 순회 진행
            } else {
                return { done: true }; // 순회 종료
            }
        }
    };
};

// 이제 의도한 대로 동작합니다!
for (let num of range) {
    console.log(num); // 1, 2, 3, 4, 5
}