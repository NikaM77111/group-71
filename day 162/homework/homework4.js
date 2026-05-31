// 4) შექმენი ცვლადი ტექსტით: const message = "JavaScript is cool!".
// setInterval- ის გამოყენებით, ყოველ 0.5 წამში ეკრანზე გამოაჩინე ამ ტექსტის მომდევნო ასო 
// (ჯერ "J", შემდეგ "Ja", შემდეგ "Jav"...). როდესაც მთლიანი წინადადება დაიბეჭდება, გამოიყენე clearInterval, რათა კოდი შეწყდეს.



const message = "JavaScript is cool!";

let index = 0;

const type = setInterval(() => {
console.log(message.slice(0, index + 1));
index++;

if (index === message.length) {
    clearInterval(type);
}
}, 500);