const kim = {
	nid: 3,
	addr: 'Pusan',
    arr: [1, 2, 3, {aid : 1}, [10, 20]], 
	oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
    fn(){
        console.log('fn=', this.id)
    },
};

const copyArrayOrObject = arrobj => {
    const copyObj = Array.isArray(arrobj) ? [] : {};
    for (let k in arrobj) {
      const tmpObj = arrobj[k];
      console.log(k, tmpObj, typeof tmpObj);
      if (typeof tmpObj === 'object') copyObj[k] = copyArrayOrObject(tmpObj);
      else copyObj[k] = arrobj[k];
    }
  
    return copyObj;
  
}

const newKim = copyArrayOrObject(kim);
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


    console.log(kim, newKim);

    kim.fn();
    newKim.fn = function() {
        console.log('fn22 = ', this.nid * 10);
    };

    newKim.fn();

    const kims = [kim, newKim];
    const newKims = copyArrayOrObject(kims);
    newKims[0]['arr'][1] = 2000;
    console.log(kims, newKims);

    console.log('-----------------------');
    console.log(JSON.stringify(kims));
    console.log(JSON.stringify(newKims));


    const declareFn = function(name) {
        // if, 'use strict'?
        this.name = name;
        console.log('declareFn = ', this, new.target, this.name, name);
      }
      
      const arrowFn = (name) => {
        this.name = name;
        console.log('arrowFn = ', this, new.target, this.name, name);
      }
      
      declareFn('dfn');
      arrowFn('afn');
      
      const dfn = new declareFn('D');
      console.log('typeof dfn=', typeof dfn);
    //   const afn = new arrowFn('A'); // OK?

    