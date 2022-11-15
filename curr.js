function sum(a) {
    return function (b) {
        return a * b;
    }
}
const res = sum(4)(5);
console.log(res);


