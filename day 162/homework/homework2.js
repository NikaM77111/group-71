// 2) დაწერე კოდი, რომელიც ეკრანზე რეალურ დროში აჩვენებს მიმდინარე საათს, წუთსა და წამს (ფორმატით: HH:MM:SS).
//  დრო უნდა ნახლდებოდეს ყოველ 1 წამში Date ობიექტის დახმარებით.
// (ეს ინტერვალი არასდროს არ უნდა გაჩერდეს და მოქმედებდეს იქამდე, სანამ მომხმარებელი გვერდს არ დახურავს).


setInterval(() => {
let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(hours + ":" + minutes + ":" + seconds);
}, 1000);