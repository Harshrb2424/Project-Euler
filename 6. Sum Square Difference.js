// The sum of the squares of the first ten natural numbers is, 385
// The square of the sum of the first ten natural numbers is, 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
let startNumber = 1;
let endNumber = 100;

let sum = 0, squareSum = 0, sumSquare = 0;
for (let i = startNumber; i <= endNumber; i++) {
    sum += i;
    squareSum += i*i;
}
sumSquare = sum*sum;

console.log(`Hence the difference between the sum of the squares of the first ${endNumber} natural numbers and the square of the sum is `);
console.log(`${sumSquare} - ${squareSum} = ${sumSquare - squareSum}`);

// You are the 511627th person to have solved this problem.
// This problem has a difficulty rating of 5%. 