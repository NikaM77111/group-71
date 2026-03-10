// 1) შექმენით person ობიექტი, დაამატეთ მასში ოთხი key: firstName, 
// lastName, age, height, შემდეგ წაშალეთ age, height შეცვალეთ და საბოლოოდ დაპრინტეთ ობიექტი

const person = {
    firstname: "nika",
    lastName: "Machavariani",
    age: 17,
    height: 180
}

delete person.age;
person.height = 183;
console.log(person);