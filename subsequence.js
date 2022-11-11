var arr = [1, 2, 3, 4];
var arr2 = [2, 4];
var flag = true;
for (var i = 0; i < arr.length; i++){
    if (arr[i] === arr2[i]) {
        flag = true;
    }
    else {
        flag = false;
    }
}
if (flag == true) {
    console.log("true");
}
else {
    console.log("false");
}
const filterArr = [1, 2, 4, 5, 7, 9, 34];
const filterFunction = filterArr.filter((num) => {
    return num < 10
});
console.log(filterFunction);
//reduce function of array 
const sum = filterArr.reduce((acc, current, i, arr) => {
    return acc + current;
})
console.log(sum);

var student = [
    { name: "Pawan", rollNumber: 23, marks: 100 },
      { name: "Tan", rollNumber: 203, marks: 70 },
        { name: "Yadav", rollNumber: 243, marks: 10 },
          {name:"Krish",rollNumber:238,marks:107},
            {name:"james",rollNumber:73,marks:140}
]
let names = [];
for (var i = 0; i < student.length; i++){
    names.push(student[i].name.toUpperCase());
}
console.log(names);

//same with Map() function
const namesMap = student.map((item) => item.name.toLowerCase())
console.log("map function Used in Array",namesMap);