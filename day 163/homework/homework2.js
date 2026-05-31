//2) შექმენი ფუქნცია, რომელსაც გადააწოდებ რიცხვი. კონსოლში დალოგე რენდომული 
// რიცხვი იქამდე, სანამ ეს გადაცემული და რენდომ რიცხვი არ დაემთხვევა ერთმამენთს.


function randomUntilMatch(num) {
let interval = setInterval(() => {
    let random = Math.floor(Math.random() * 10) + 1;

    console.log("Random:", random);

    if (random === num) {
        console.log("Matched!");
        clearInterval(interval);
    }
}, 500);
}

randomUntilMatch(7);