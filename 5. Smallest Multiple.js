// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible (divisible with no remainder) by all of the numbers from 1 to 20?
n1 = 1;
n2 = 20;

number = 1;
function primeFactors(number) {
    let array = {};
    let temp = number;
    while(temp > 1){
        for (let i = 2; i <= temp; i++) {
            if (temp%i == 0) {
                temp /= i; 
                if (array[i]) {
                    array[i] += 1;
                } else {
                    array[i] = 1;
                }
                
                break;
            }
        }
    }
    return array;
}

let multiples = {}
for (let j = 1; j <= n2; j++) {
    for (x in primeFactors(j)){
        if (!multiples[x]) multiples[x] = 0;
        if (multiples[x] < primeFactors(j)[x])  multiples[x] = primeFactors(j)[x];
    }
}

let smallest = 1;
for(x in multiples){
    smallest *= Math.pow(Number(x), multiples[x]);
}
console.log(`The smallest positive number that is evenly divisible by all of the numbers from ${n1} to ${n2} is ${smallest}`);
console.log(`The Multiples of ${smallest} are`);
console.log(multiples);