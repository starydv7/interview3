const obj1 = {
    name: "Pawan",
     getName:function () {
        return this.name;
   }
}
//console.log(obj1);
var obj2 = {
    roll: 1,
    _proto_:obj1
}
console.log(obj2.getName());