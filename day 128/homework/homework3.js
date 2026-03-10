// //3) მოცემულია მასივი:
// words = ["Hello", " ", "World", "!"]
// გამოიყენეთ reduce(), რომ შეაერთოთ ყველა ელემენტი ერთ სტრინგად.


const words = ["Hello", " ", "World", "!"];

const result = words.reduce((acc, current) => acc + current, "");

console.log(result);  // "Hello World!"



