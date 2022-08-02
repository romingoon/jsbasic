function closure() {
  let cnt = 0;
  function cntPlus() {
    cnt = cnt + 1;
  }
  function setCnt(value) {
    cnt = value;
  }
  function printCnt() {
    console.log(cnt);
  }
  return {
    cntPlus,
    printCnt,
  };
}

const cntClo = closure();

console.log(cntClo);

cntClo.printCnt();
cntClo.cntPlus();
cntClo.printCnt();
cntClo.setCnt(100);

// console.log(cnt);

// console.log(cnt);
// cntPlus();
// console.log(cnt);

// // 1억개의 코드

// cnt = 1000;

// // 1억개의 코드
// cntPlus();
// console.log(cnt);
