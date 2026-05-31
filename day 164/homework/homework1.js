//1) შექმენი ფუნქცია, რომელიც ყოველ 1 წამში დაბეჭდავს შემთხვევით 
// რიცხვს 1-დან 50-მდე. თუ რიცხვი 25 გამოვა, გააჩერე ინტერვალი და დაბეჭდე "Target found!".


function randomNumber() {
const interval = setInterval(() => {
    const randomNum = Math.floor(Math.random() * 51);

    console.log(randomNum);

if (randomNum === 25) {
    clearInterval(interval);
    console.log("Target found!");
    }
}, 1000);
}

randomNumber();