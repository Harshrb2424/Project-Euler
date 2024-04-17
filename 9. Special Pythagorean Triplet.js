// A Pythagorean triplet is a set of three natural numbers, a<b<c for which, a^2 + b^2 = c^2
// For example, 3^2+4^2 = 9 + 16 = 25 = 5^2
// There exists exactly one Pythagorean triplet for which a+b+c = 1000
// Find the product abc.
function condition(a,b,c) {
    return a + b + c == 1000 && (a*a)+(b*b) == c*c;
}

let product;
for (let a = 1; a < 999; a++) {
  for (let b = 2; a < b, b<999; b++) {
    for (let c = 3; b < c, c<999; c++) {
      if (condition(a,b,c)) product = a*b*c;
    }
  }
}

console.log(`The product abc is ${product}`);
// You are the 372378th person to have solved this problem.
// This problem has a difficulty rating of 5%. 