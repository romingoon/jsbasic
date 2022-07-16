
const sum1 = (n) =>{
    if(n>1){
        return n + sum1(n-1);
    }else {
        return n;
    }
};

console.log(sum1(100));


const kim = {
	nid: 3,
	addr: 'Pusan',
    arr: [1, 2, 3, {aid : 1}, [10, 20]], 
	oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
};



const newKim = deepCopyObject(kim);
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.oo.addr.city = 'Daejeon';
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';
console.log(kim.addr !== newKim.addr, 
    kim.oo.name !== newKim.oo.name,
    kim.oo.addr.city !== newKim.oo.addr.city); // true, true, true면 통과!

    const copyArray = function(a){
        const rets = [];
        for(let t of a){
            console.log(t, typeof t);
            if(Array.isArray(t)) rets.push(copyArray(t));
            else if(typeof t === 'object') rets.push(deepCopyObject(t));
            else rets.push(t);
        }
        return rets;
    };


    function deepCopyObject(obj){  

        const clone = {};
        for(let key in obj){
            if(typeof obj[key] === 'object' && obj[key] !== null){
                clone[key] = deepCopyObject(obj[key]);
            }else{
                clone[key] = obj[key];
            }
        }
        return clone;
    };

console.log(kim);
console.log(newKim);

console.log(typeof newKim.arr[4], newKim.arr[4], kim.arr[4]);
    // function deepCopyObject(obj) {
    //   const copyObj = {};
    //   for (let k in obj) {
    //     const tmpObj = obj[k];
    //     console.log(k, tmpObj, typeof tmpObj);
    //     // if (Array.isArray(tmpObj)) copyObj[k] = [...tmpObj];
    //     if (Array.isArray(tmpObj))
    //       copyObj[k] = copyArray(tmpObj);
    //     else if (typeof tmpObj === 'object')
    //       copyObj[k] = deepCopyObject(tmpObj);
    //     else
    //       copyObj[k] = obj[k];
    //   }
    
    //   return copyObj;
    // }

// 재귀함수

const f = (n) =>{
    if(n<0) return;
    if(n===0) return 1;
    else return n * f(n-1);
};
console.log('-------factorial-------');
console.log(f(3));



