//3) შექმენი ტაიმერი, რომელიც იწყებს 10-დან და ყოველ წამში აკლებს 1-ს. როდესაც 0 გახდება, დაბეჭდე "Time's up!".



function countdown() {
let time = 10;

const interval = setInterval(() => {
    console.log(time);

    time--;

        if (time < 0) {
    clearInterval(interval);
    console.log("Time's up!");
        }
}, 1000);
}

countdown();