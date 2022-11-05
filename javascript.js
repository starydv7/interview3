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
const name = "Pawan";
const age = 23;
console.log("name",isNaN(name));
console.log("age", isNaN(age));

var arr = [1, 2, 3, 4, 5];
//remove first of array
arr.shift();
console.log("remove first of array", arr);
//unshift
arr.unshift(7);
console.log("add on first of array", arr);
//to remove last element
arr.pop();

console.log("pop", arr);

arr.push(10);
console.log("push", arr);

//check number is odd or even;
var number = 2350;
function check() {
    if (number % 2 === 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
check();