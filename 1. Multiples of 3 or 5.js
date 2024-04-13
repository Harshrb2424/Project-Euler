// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
startNumber = 1;
endNumber = 1000;
sum = 0;
let array = [];

console.log(`natural numbers below ${endNumber} that are multiples of 3 or 5, we get`);
for (let i = startNumber; i < endNumber; i++) {
    if (i%3 === 0 || i%5 === 0) {
        array.push(i);
        sum += i;
    }
}

console.log(...array);
console.log(`The sum of these multiples is ${sum}`);