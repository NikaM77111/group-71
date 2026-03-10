//4) შექმენით რიცხვების სია. პირველ რიგში გაიგეთ რიცხვთა ჯამი, შემდეგ კი მათი ნამრავლი - reduce() ის გამოყენებით.

const numbers = [12, 3, 5, 44, 3, 8, 5, 11]

const result1 = numbers.reduce((acc, current) => acc + current);
const result2 = numbers.reduce((acc, current) => acc * current);


console.log(result1);
console.log(result2);







