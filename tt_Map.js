const { empty } = require("prelude-ls");

const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];
let deptMap = new Map();

deptMap.set("인사팀", hrTeam).set("개발팀", devTeam);

const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

let empDept = new Map();
empDept
  .set(hong, hrTeam)
  .set(kim, devTeam)
  .set(Object.fromEntries(emps.entries())[2], devTeam)
  .set(Object.fromEntries(emps.entries())[3], devTeam);

console.log(deptMap); // Map(2) { '인사팀' => { id: 1, dname: '인사팀' }, '개발팀' => { id: 2, dname: '개발팀' } }
console.log(empDept); // Map(4)
//{ { id: 1, name: 'Hong', dept: 1 } => { id: 1, dname: '인사팀' },
//{ id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' },
//{ id: 3, name: 'Park' } => { id: 2, dname: '개발팀' },
//{ id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'
