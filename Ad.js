  function findComplement(num) {
           let ans = 0;
           for (let i = 0; num > 0; i++) {
               ans += Math.pow(2, i) * (!(num % 2));
               num = Math.floor(num / 2);
           }
           return ans;
       }
 
       // Driver code
       let N = 50;
       console.log(findComplement(N));