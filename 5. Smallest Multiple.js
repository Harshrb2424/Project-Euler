// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible (divisible with no remainder) by all of the numbers from 1 to 20?
n1 = 1;
n2 = 20;

number = 1;
// for (let i = n1; i < n2; i++) {
//     if (number%i != 0) {
//         number *= i;
//     }
// }
// console.log(number);


// function primeFactors(number) {
//     let array = [];
//     let temp = number;
//     while(temp > 1){
//         for (let i = 2; i <= temp; i++) {
//             if (temp%i == 0) {
//                 temp /= i; 
//                 array.push(i);
//                 break;
//             }
//         }
//     }
//     return array;
// }
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
let large = {}
for (let j = 1; j <= n2; j++) {
    // console.log(primeFactors(j));
    for (x in primeFactors(j)){
        if (large[x]) {
            
        } else {
            large[x] = 0;
        }
        if (large[x] < primeFactors(j)[x]) {
            large[x] = primeFactors(j)[x];
        }
    }
}

console.log(large);
let largestMultiple = 1;
for(x in large){
    largestMultiple *= Math.pow(Number(x), large[x]);
}
console.log(largestMultiple);
