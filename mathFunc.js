function findMinNum(arr){

    let minNum = arr[0];
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < minNum){
            minNum = arr[i];
        }
    }

    return minNum;
};

console.log(findMinNum([3, 8, 12, 14]));



let company = {
    sales: [
      { name: 'John', salary: 1000 },
      { name: 'Alice', salary: 1600 },
    ],
    development: {
      sites: [
        { name: 'Peter', salary: 2000 },
        { name: 'Alex', salary: 1800 },
      ],
      internals: [{ name: 'Jack', salary: 1300 }],
    },
  };
  
function sumSalaries(sal){
   if(Array.isArray(sal)){
    return sal.reduce((prev, cur) => prev + cur.salary, 0);
   }else{
    let sum = 0;
    for(let key in sal){
        sum += sumSalaries(sal[key]);
    }
    return sum;
   }

};

  console.log(sumSalaries(company));

// 다음 연결 리스트 내에 있는 값을 
// 역순으로  출력하는 함수(printLinkedList)를 작성해주세요.
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: {
              value: 6,
              next: {
                value: 7,
                next: {
                  value: 8,
                  next: {
                    value: 9,
                    next: {
                      value: 10,
                      next: null,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };


  function printLinkedList(arr) {
    if(!arr.next){
        return arr.value;
    }else{
        console.log()
    }
};
  
  console.log(printLinkedList(list)); 