const range = (start, end, step) =>{
    
    if(typeof step == 'undefined'){
        step = start > end ? -1 : 1;
    }
    if(typeof end == 'undefined'){
        end = start;
        start = 1;
    }
    if((step > 0 && start >=end) || (step < 0 && start<=end)){
        return [];
    }

    let arr = [];
    
    for(let i = start; step > 0 ? i <= end : i >=end; i+=step){
    arr.push(i);
    }
    return arr;
};


console.log('---------------------------------');
console.log('range(1, 10, 1) =', range(1, 10, 1));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('range(1, 10, 2) =', range(1, 10, 2));  // [1, 3, 5, 7, 9]
console.log('range(5, 15, 3) =', range(5, 15, 3));  // [5, 8, 11, 14]
console.log('range(0, 20, 5) =', range(0, 20, 5));  // [0, 5, 10, 15]

console.log('range(0, 20, -1) =', range(0, 20, -1));  // []

console.log('range(1, 10) = ', range(1, 10));     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('range(10, 1) = ', range(10, 1));     // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log('range(8, 2) = ', range(8, 2));     // [8, 7, 6, 5, 4, 3, 2]

console.log('range(10, 1, -1) =', range(10, 1, -1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log('range(10, 1, -2) = ', range(10, 1, -2)) ; // [ 10, 8, 6, 4, 2 ]
console.log('range(10, 1, -3) = ', range(10, 1, -3)) ; // [ 10, 7, 4, 1]
console.log('range(20, 0, -5) = ', range(20, 0, -5)) ; // [ 15, 10, 5, 0 ]

console.log('range(20, 0, 5) = ', range(20, 0, 5)) ; // []

console.log('range(5) = ', range(5));  // [1, 2, 3, 4, 5] 
console.log('range(100) = ', range(100)) ;  // [1, 2, 3, 4, 5, …, 99, 100] 

