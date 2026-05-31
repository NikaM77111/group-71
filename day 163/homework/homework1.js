//1) დაწერე ფუნქცია, რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა


function countdown(sec) {
let interval = setInterval(() => {
    sec--;
    console.log(sec);

    if (sec < 0) {
    clearInterval(interval);
    console.log("Finished!");
    }
}, 1000);
}

countdown(5);