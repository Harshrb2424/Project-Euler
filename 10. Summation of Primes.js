// The sum of the primes below 10 is 2+3+5+7 = 17.
// Find the sum of all the primes below two million.

number = 2000000;
let sum = 0;
function primeNumber(number) {
    let multiple = 0;
    for (let i = 1; i <= number; i++) {
        number%i == 0 && multiple++;
        if ( multiple > 2) break;
    }
    return multiple==2 ? true : false;
}

for (let i = 2; i < number; i++) {
    if (primeNumber(i)) {
        console.log(i+": "+sum);
        sum += i;
    }
}
console.log(sum);
console.log(`The sum of all the primes below ${number} is ${sum}`);
// You are the 341668th person to have solved this problem.