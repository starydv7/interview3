// You are provided an array  of size  that contains non-negative integers. Your task is to determine whether the number that is formed by selecting the last digit of all the N numbers is divisible by .

// Note: View the sample explanation section for more clarification.

// Input format

// First line: A single integer  denoting the size of array
// Second line:  space-separated integers.
// Output format

// If the number is divisible by , then print . Otherwise, print .

// Constraints

// Sample Input
// 5
// 85 25 65 21 84
// Sample Output
// No
// Time Limit: 1
// Memory Limit: 256
// Source Limit:
// Explanation
// Last digit of  is .
// Last digit of  is .
// Last digit of  is .
// Last digit of  is .
// Last digit of  is .
// Therefore the number formed is  which is not divisible by .

var arr = [85, 25, 61, 23, 84];
//var arr = [80, 70, 90, 50, 100];
var l = arr.length;
//console.log(l);
var flag = 0;
function getNumber(arr, l) {
    for (var i = 0; i < arr.length; i++) {
        let res1 = arr[i] % 10;
        // console.log(res1);
        if (res1 % 10 == 0) {
            flag = 1;
            return res1;
            
        }
        else {
               
            flag = 0;
             console.log(res1);
        }
    }
    if (flag == 1) {
        console.log("Yes");
    }
    else {
        console.log("No");
    
        
    }
}
const ans=getNumber(arr,l);
console.log(ans);
