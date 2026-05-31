//2) შექმენი ფუნქცია, რომელიც იღებს ტექსტს და ყოველ 500 მილიწამში თითო სიმბოლოს ბეჭდავს კონსოლში (typewriter effect).


function typeWriter(text) {
let index = 0;

const interval = setInterval(() => {
    console.log(text[index]);

    index++;

if (index === text.length) {
    clearInterval(interval);
}
}, 500);
}

typeWriter("Hello World!");