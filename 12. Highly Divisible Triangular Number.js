let num = 500;
let i = 1;
let divisors = [];
let triNumber;
let prev = 1;

function triangleNumber(number) {
    if (number == 1) {
        return 1;
    }
    prev = prev+number;
    return prev;
}
function findFactors(number) {
    const factors = [];
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            
            factors.push(i);
            if (i !== number / i) {
                factors.push(number / i);
            }
        }
    }
    return factors.sort((a, b) => a - b);
}

for (i = 1; divisors.length <= num; i++) {
    triNumber = triangleNumber(i);
    divisors = findFactors(triNumber);
    console.log(triNumber+" divisors: "+divisors.length);
}

console.log(`The value of the first triangle number to have over ${num} divisors is ${triNumber}`);
// You are the 232269th person to have solved this problem.