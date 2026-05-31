// 1) შექმენი პროგრამა, რომელიც ეკრანზე გამოაჩენს ციფრს 10. setInterval-ის გამოყენებით
//  ყოველ 1 წამში ეს ციფრი უნდა შემცირდეს 1-ით (9, 8, 7...). როდესაც ტაიმერი ჩამოვა 0-ზე,
//   ინტერვალი უნდა გაჩერდეს (clearInterval) და ეკრანზე დაიბეჭდოს შეტყობინება: 'Time is up!'


let number = 10;

const timer = setInterval(() => {
number--;
console.log(number);

if (number < 0) {
    clearInterval(timer);
    console.log("Time is up!");
}
}, 1000);