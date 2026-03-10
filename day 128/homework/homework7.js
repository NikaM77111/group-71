// 7) შექმენით პროგრამა, რომელიც იღებს რიცხვების სიას. გამოიყენეთ map(), filter() და reduce(), რომ:
// filter → დატოვოთ მხოლოდ დადებითი რიცხვები.
// map → აიყვანოთ დადებითი რიცხვები კვადრატში.
// reduce → იპოვოთ რიცხვთა ჯამი.


const numbers = [2, 4, -7, -1, 4, 9, 7, -5];

const positives = numbers.filter(num => num > 0);

const squared = positives.map(num => num * 2);

const sum = squared.reduce((acc, current) => acc + current)

console.log(sum)