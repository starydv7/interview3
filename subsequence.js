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