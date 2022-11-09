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


let data =" true";
console.log("type of boolean value", typeof !data);

let data1 = ["pawan", "Yadav", "full"];
delete data1[2];
console.log("data1", data1);
console.log(data1.length);


//merge two array
var array1 = [1, 2, 5, 6, 8];
var array2 = [4, 6, 3, 2, 1, 4];
const merge = [...array1, ...array2];
console.log("Merge two Array", merge);
//merge and sort it out
merge.sort();
console.log(merge);

//square of number
let c = 3**3;
console.log("cube of number", c ** c, "square ", c * c);
console.log(c);
//tricky
let a = 1;
let b = 2;
console.warn(--b === a);
//--c become 1 and a is 1 so true;
console.log(false == 0);
//very tricky
let x= 1;
let y = 1;
let z = 2;
console.log(x === y === --z);

//hoisting
//a1 = 10;
console.log(a1);
var a1;
a1 = 10
//
//console.log(n1);
//setTimeout with var
// for (var i = 0; i < 3; i++){
//     setTimeout(() => console.log("with Var keyword",i), 1000);
// }
// for (let i = 0; i < 4; i++){
//     setTimeout(() => console.log(i), 1);
// }
//cant redclare var and let only var can redeclare
// var h = 10;
// //let h = 11;
// console.log(h);
// let a2 = 10;
// let b2 = new Number(10);
// console.log(a2==b2)
// console.log("cannot true", a2 === b2);
// //b become object

//sum
// function sum(a, b) {
//     let res1 = a + b;
//     return res1;
// }
// console.log("sum", sum(1, "2"));
// console.log("type of Sum", typeof (res));
// //Another series
// let number1 = 0;
// console.log(number1++);
// console.log(++number1);
// console.log(number1);
// function getAge(...args) {
//     console.log("type of args",typeof (args));
// }
// getAge();

// //eval
// const sum1 = eval("10 * 10 + 5");
// console.log(sum1);

// const obj = { a: "one", b: "two", a: "repeat" };
// console.log(obj);
// //last one is preferred always
// for (var i = 1; i < 5; i++){
//     if (i ===3) {
//         continue;
//     }
//     console.log(i);
// }
// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("second"));
// const baz = () => console.log("third");
// foo();
// bar();
// baz();
// {/* <div onClick="alert(1)">
//     <div onClick="alert(2)">
//         <button onClick="alert(3)">
// Click
//         </button>
//     </div>

// </div> */}
// const array5 = [1, 2, 3, 5];
// array5[8] = 28;
// console.log(array5);
// array5[19] = array5;
// console.log(array5);
// var name10="Pawan"
// console.log("bar to string", [...name10]);
// //for in loop
// const person = {
//     name: "Pawan",
//     age: 21,
// };
// for (var items in person) {
//     console.log(items);
// }
// let data10 = 3 + 4 + "5";
// var arr10 = 3 + "4";
// console.log("type of data is", typeof arr10);

// //weird
// console.log(typeof 3 + 4 + "5");

// const user = {
//     name: "Pawan Yadav",
//     age: 24,
// };
// delete user.age;
// console.log(user);

// const func = (function (a) {
//     delete a;
//     return a;
// })(5);
// console.log(func);
const userDetails = {
    Name: "Pawan Yadav",
    Age: 24,
    IsTrue: true,
};
for(key in userDetails) {
    console.log(key,userDetails[key]);
}
function modifyArray(arr, callback) {
    arr.push(100);
    callback();
}
var arr = [1, 2, 3, 4, 5];
modifyArray(arr, function () {
    console.log("array has been modified", arr);
})
function addNumber(a, b, c, ...others) {
    console.log("rest operator",others)
    return a + b + c
}

// const result3 = addNumber(8, 9, 10, 7, 4, 3);
// console.log(result3);
//  var names = ["Ajay", "Anuj", "Pawan"];
// function getNames(...names) {
//     console.log(...names);
// }
// var result5=getNames();
// console.log(...result5);
var names = ["Pawan", "Yadav", "Full Stack Developer"];
function getNames(name1, name2, name3) {
    console.log(name1,name2,name3)
}
getNames(names[0], names[1], names[2]);
getNames(...names);
getNames(names);
//
function fun1(...theArgs) {
    console.log("length of arguments", theArgs.length);
    console.warn(theArgs);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3

function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr15 = multiply(5,15, 25, 42,4);
console.log("rest operator", arr15);
//[30, 50, 84]
function square(number) {
    return number * number;
}
const res101 = square(5);
console.log("res", res101);

const students = {
    name: "Pawan",
    age: 24,
    hobbies: ["sex", "cricket"],
}
const { ...rest } = students;
console.log(rest);