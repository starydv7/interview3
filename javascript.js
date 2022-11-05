const add = () => {
    return true + true + true + 1;
}
//true=1
var res = add();
console.log("add",res);
const sub = () => {
    return false + 2;
}
//false ==0
var result = sub();
console.log("sub", result);

//
const result1 = [] || 0 || true;
console.log(result1);
//Promise
console.log(Promise.resolve(5));
//Promise fulfilled
//