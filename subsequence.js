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
    { name: "Pawan", rollNumber: 23, marks: 400 },
      { name: "Tan", rollNumber: 3, marks: 170 },
        { name: "Yadav", rollNumber: 13, marks: 108 },
          {name:"Krish",rollNumber:28,marks:107},
            {name:"james",rollNumber:3,marks:144}
]
let names = [];
for (var i = 0; i < student.length; i++){
    names.push(student[i].name.toUpperCase());
}
console.log(names);

//same with Map() function
const namesMap = student.map((item) => item.name.toLowerCase())
console.log("map function Used in Array", namesMap);

//filter 
const filterMarks = student.filter((item) => item.marks > 60);
const details = student.filter((item) =>
    item.marks > 05 && item.rollNumber > 10);
let nameDetails = namesMap.name;
let rollDetails = student.rollNumber;
console.log("details", details);
//  console.log(nameDetails, rollDetails);