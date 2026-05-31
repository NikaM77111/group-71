//8) შექმენი საწყისი ფასი, მაგალითად 100$. ყოველ 1 წამში ფასი შემთხვევითად ან იზრდება 1-დან 5 დოლარამდე, ან იკლებს. 
//ყოველ წამს დაბეჭდე ახალი ფასი. თუ ფასი ჩამოცდება 80$-ს ან ავა 120$-ზე გააჩერე ინტერვალი და დაბეჭდე საბოლოო შედეგი.


let price = 100;

let priceInterval = setInterval(() => {
  let change = Math.floor(Math.random() * 5) + 1;


if (Math.random() > 0.5) {
    price += change;
} else {
    price -= change;
}

console.log(`Current price: $${price}`);

if (price < 80 || price > 120) {
    clearInterval(priceInterval);
    console.log(`Final price: $${price}`);
}
}, 1000);