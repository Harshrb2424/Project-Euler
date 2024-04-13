// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
mexNumber = 999;
let temp, pal;
let a = 1, b = 1;
let largest = 0;

function palindromic(number) {
  temp = number;
  pal = 0;
  while (temp > 0) {
    pal = pal * 10;
    pal = pal + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return pal == number ? true : false;
}

for (let i = mexNumber; i > 0; i--) {
  for (let j = mexNumber; j > 0; j--) {
    if (palindromic(i * j) && largest < i * j) {
      a = i;
      b = j;
      largest = i * j;
    }
  }
}

console.log(`The largest palindrome made from the product of two 3-digit numbers is ${largest} = ${a} x ${b}.`);