//2) კომენტარების სახით ახსენით რას აკეთებს და რისთვის გამოიყენება Promise.all მეთოდი.



// Promise.all() ერთდროულად ამუშავებს რამდენიმე Promise-ს.
// იგი ელოდება ყველა Promise-ის წარმატებით დასრულებას.
// თუ ერთ-ერთი მაინც reject გახდა,
// მთელი Promise.all() reject გახდება.
// წარმატების შემთხვევაში აბრუნებს ყველა შედეგს მასივის სახით.

// მაგალითი
const p1 = Promise.resolve("JavaScript");
const p2 = Promise.resolve("HTML");
const p3 = Promise.resolve("CSS");

Promise.all([p1, p2, p3])
    .then((results) => {
    console.log(results);
    })
    .catch((error) => {
    console.log(error);
    });

// შედეგი:
// ["JavaScript", "HTML", "CSS"]