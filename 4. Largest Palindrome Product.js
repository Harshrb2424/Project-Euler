// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
let temp, pal;
let a = 1,b = 1;
let largest = 0;

function palindromic(number) {
    temp = number;
    pal = 0;
    while (temp > 0) {
        pal = pal*10;
        pal = pal + temp%10;
        temp = Math.floor(temp/10);
    }
    return (pal == number) ? (true) : (false);
}
function largestPalindrome(number) {
    for (let i = number; i > 900; i--) {
        for (let j = number; j > 900; j--) {
            if (palindromic(i * j) ) {
                a = i;
                b = j;
                if (largest < i*j) largest = i*j;
            }
        }
        
    }
    return largest;
}

console.log(`The largest palindrome made from the product of two 3-digit numbers is ${largestPalindrome(999)} = ${a} x ${b}.`);