const weeks = ['일', '월', '화', '수', '목', '금', '토'];
let widx = -1;
const getNextWeek = () => {
    
  widx += 1; // side-effect!
  if (widx > weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
};

let cnt = 0;
const intl = setInterval(() => {
  widx += 2; // side-effect!
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 500);

// 사이드 이펙트가 뭔지 뼈저리게 느끼고 가야함...

// 성호님 solution 

