
const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];
// let deptMap = new Map();
// deptMap.set(hrTeam.dname, hrTeam).set(devTeam.dname, devTeam);

const deptMap = new Map(depts.map(d => [d.dname, d]));
const deptIdMap = new Map(depts.map(d => [d.id, d]));
console.log(deptIdMap);

const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

const empDept = new Map(
  // emps.map(e => [e, depts[e.dept - 1]])
  // emps.map(e => [e, depts.find(d => d.id === e.dept)])
  // emps.map(e => [e, deptIdMap.get(e.dept)])
  emps.map(e => {
    return [{ id: e.id, name: e.name }, deptIdMap.get(e.dept)];
  })
);

console.log(deptMap); // Map(2) { '인사팀' => { id: 1, dname: '인사팀' }, '개발팀' => { id: 2, dname: '개발팀' } }
console.log(empDept); // Map(4)
//{ { id: 1, name: 'Hong', dept: 1 } => { id: 1, dname: '인사팀' },
//{ id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' },
//{ id: 3, name: 'Park' } => { id: 2, dname: '개발팀' },
//{ id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim)?.dname); // '개발팀'


const devEmpNames = [...empDept].filter(([_, dept]) => dept.dname === devTeam.dname).map(([e]) => e.name);
console.log(devEmpNames.join(', '));