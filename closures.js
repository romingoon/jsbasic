const x = 1;
function outer() {
  const x = 10;

  function inner() {
    console.log(x);
  }
  return inner;
}

const innerFn = outer();
innerFn();




// let cnt = 0;
// function cntPlus() {
//   cnt = cnt + 1;
// }

// console.log(cnt);
// cntPlus();
// console.log(cnt);

// // 1억개의 코드

// cnt = 1000;

// // // 1억개의 코드
// cntPlus();
// console.log(cnt);




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
    setCnt,
  };
}

const cntClo = closure();

console.log(cntClo);

cntClo.printCnt();
cntClo.cntPlus();
cntClo.printCnt();

// console.log(cnt);

cntClo.setCnt(100);
cntClo.printCnt();
cntClo.cntPlus();
cntClo.printCnt();

