var arr = [1, 3, , 5, 6, 9];
function miniMaxSum(arr) {
        // arr.sort((a, b) => a - b);
    arr.Sort();

        let min = arr.slice(0, arr.length - 1).reduce((a,b) => a+b)
        let max = arr.slice(1).reduce((a,b) => a+b)

        console.log(min, max)
}
miniMaxSum();