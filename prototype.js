const obj = {
    value: 100,
    foo() {
        console.log("foo's this :", this);

        function test() {
            console.log("inner Fn :", this);
        }
        test();

        setTimeout(function () {
            console.log("callback's this : ", this);
        }, 100);
    },

};

obj.foo();