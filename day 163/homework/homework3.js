//3) ექმენი ფუნქცია, რომელიც ყოველ 0.5 წამში რიგრიგობით დაბეჭდავს "[ON]" და "[OFF]", ისე თითქოს ნათურა ციმციმებს.


function blinkingLight() {
    let state = "[ON]";

    setInterval(() => {
        console.log(state);

        if (state === "[ON]") {
            state = "[OFF]";
        } else {
            state = "[ON]";
        } 
    }, 500);
}

blinkingLight();