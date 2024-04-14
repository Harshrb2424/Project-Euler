// By listing the first six prime numbers: 2,3,5,7,11 and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?
let limit = 10001;
let n = 1;

for (let i = 2, n = 1; n <= limit; i++) {
    if (n == limit) {
        primeNumber(i) && console.log(`the ${limit}st prime number is ${i}`);
    }
    primeNumber(i) && n++;
}
function primeNumber(number) {
  let multiple = 0;
  for (let i = 1; i <= number; i++) {
    number % i == 0 && multiple++;
    if (multiple > 2) break;
  }
  return multiple == 2 ? true : false;
}

// You are the 437933rd person to have solved this problem.
// This problem has a difficulty rating of 5%. 