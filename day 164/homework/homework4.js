//4) შექმენი მასივი 5 სახელით. ყოველ 2 წამში კონსოლში დაბეჭდე შემდეგი სახელი. როცა ყველა სახელი დაიბეჭდება, ინტერვალი შეწყდეს.


function printNames() {
const names = ["Nika", "Luka", "Ana", "Mariami", "Gio"];

let index = 0;

const interval = setInterval(() => {
    console.log(names[index]);

    index++;

    if (index === names.length) {
        clearInterval(interval);
    }
}, 2000);
}

printNames();