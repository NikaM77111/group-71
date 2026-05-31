// 7) დაწერე ტაიმერი, რომელიც ითვლის წამებს. ყოველ 5 წამში მომხმარებელს კონსოლში დაუსვი კითხვა "გსურთ ტაიმერის გაგრძელება?".
//  თუ მომხმარებელი იტყვის უარს, ინტერვალი უნდა გაჩერდეს, სხვა შემთხვევაში გაგრძელდეს.


let seconds = 0;

let timer = setInterval(() => {
seconds++;
console.log(`Seconds: ${seconds}`);

if (seconds % 5 === 0) {
    let answer = confirm("გსურთ ტაიმერის გაგრძელება?");

    if (!answer) {
    clearInterval(timer);
    console.log("Timer stopped.");
    }
}
}, 1000);