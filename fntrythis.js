
const sum1 = (n) =>{
    if(n>1){
        return n + sum1(n-1);
    }else {
        return n;
    }
};

console.log(sum1(100));


const sum2 = (n, m)=>{
    if(m>n){
        return m + sum2(m-1);
    }else{    
        return n;
    }
}

console.log(sum2(1,10));