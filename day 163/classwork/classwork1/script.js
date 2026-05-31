// შექმენი ცვლადი ტექსტით: const message = "This is Group 71".
// setInterval- ის გამოყენებით, ყოველ 0.4 წამში ეკრანზე გამოაჩინე ამ ტექსტის მომდევნო ასო (ჯერ "T", შემდეგ "Th", შემდეგ "Thi"...). 
// დააბრუნეთ წინადადება აწყის ადგილას. ანუ კოდმა უნდა დაიწყოს პირიქით წაშლა სიმბოლოების მიხედვით. როდესაც მთლიანი წინადადება 
// წაიშლება, გამოიყენე clearInterval, რათა კოდი შეწყდეს.




const text = document.getElementById("text")



const message = "This is Group 71"

let index = 0;
let Delete = false

const interval = setInterval(() => {

    if(Delete === false){
        index++;
        text.textContent = message.slice(0, index)

        if(index === message.length) {
            Delete = true;
        }
    } else {
        index--;
        text.textContent = message.slice(0, index)
    }
}, 400)