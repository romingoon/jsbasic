
const sum = (arr, cb, iv = 0) => {
    const sum = 0;

    for(let i = 0; i<arr.length; i+=1){
        sum += arr[i];
    }
    return sum;
};

console.log(([1,2,3], sum(), arr[0]));


