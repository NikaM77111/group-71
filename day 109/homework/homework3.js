let numbers = [-10, 5, 3, -2, 20, -1];
let positiveSum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveSum += numbers[i];
    }
}

console.log(positiveSum);
