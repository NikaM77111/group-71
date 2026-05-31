// 3) შექმენი მასივი, რომელშიც შეინახავ 5 სხვადასხვა ფერს. setInterval-ის გამოყენებით
// ყოველ 1.5 წამში შეცვალე საიტის ფონის ფერი მასივიდან მორიგი ფერით. მას შემდეგ,
// რაც პროგრამა ყველა ფერს ერთხელ მაინც გადაატრიალებს (ანუ 5-ვე ფერი გამოჩნდება), ინტერვალი უნდა გაჩერდეს.


const colors = ["red", "blue", "green", "yellow", "purple"];

let index = 0;

const colorInterval = setInterval(() => {
document.body.style.backgroundColor = colors[index];
index++;


if (index === colors.length) {
    clearInterval(colorInterval);
}
}, 1500);