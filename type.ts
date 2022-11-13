function plusMinus(arr) {
  // Write your code here
  let pos = 0;
  let zero = 0;
  let negative = 0;
  const arrLength = arr.length;
  arr.forEach((num) => {
    if (num === 0) zero++;
    if (num > 0) pos++;
    if (num < 0) negative++;
  });

  console.log(formatNumber(pos / arrLength, 6));
  console.log(formatNumber(negative / arrLength, 6));
  console.log(formatNumber(zero / arrLength, 6));
}
