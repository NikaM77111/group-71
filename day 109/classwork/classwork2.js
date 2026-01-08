let numbers = [1, 2, 3, 4, 5, 6, 8];
let evenSum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum += numbers[i];
  }
}

console.log(evenSum);
