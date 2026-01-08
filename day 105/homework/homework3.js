let age = Number(prompt("Enter your age:"));

let result =
    age > 18 ? "Adult" :
    age >= 13 && age <= 17 ? "teen" :
    "child";

console.log(result);
