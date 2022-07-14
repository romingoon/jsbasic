console.log('------------0712 객체 Try this---------');
// 성호님 solution
const kim = {nid : 3, nm : 'Hong', addr : 'Busan'};
const newKim = copyObject(kim);

newKim.addr = 'Daegu';

console.log(kim.addr !== newKim.addr);

function copyObject(obj){

    const copyObj = {};

    for(let k in obj){
        copyObj[k] = obj[k];
    }

    return copyObj;
}