// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
// let number = 600851475143;
let number = 600851475143;

let largest = 0;
let exit = 0;
let array = [];

function primeFactors(number) {
    if (number == 1) exit = 1;
    for (let i = 0; exit == 0; i++) {
        if (primeNumber(i) && number%i==0) {
            array.push(i);
            if (largest<i) largest = i;
            primeFactors(number/i);
        }
    }
    return array;
}
function primeNumber(number) {
    let multiple = 0;
    for (let i = 1; i <= number; i++) {
        number%i == 0 && multiple++;
        if ( multiple > 2) break;
    }
    return multiple==2 ? true : false;
}

console.log(`The prime factors of ${number} are`);
console.log(primeFactors(number));
console.log(`the largest prime factor of the number ${number} is ${largest}`);