// 5) მოცემულია სია:
// nums = [1,2,3,4,5,6,7,8,9,10]
// გამოიყენეთ:
// filter → დატოვეთ მხოლოდ ლუწები.
// map → ლუწი რიცხვები გაამრავლეთ 3-ზე.
// reduce → ბოლოს იპოვეთ დარჩენილ რიცხვთა ჯამი.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const evenNumbers = nums.filter(num => num % 2 === 0);


const multipliedEvens = evenNumbers.map(num => num * 3);


const sum = multipliedEvens.reduce((acc, current) => acc + current, 0);

console.log(sum);  // 90