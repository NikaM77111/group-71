//6) გაქვს მასივი 3 სხვადასხვა მესიჯით. ყოველ 2 წამში გაგზავნე (დაბეჭდე) მომდევნო მესიჯი.
//  როცა მესიჯები გათავდება, დაიწყე თავიდან (ციკლურად). ხოლო მე-4 ციკლის შემდეგ საერთოდ გათიშე ინტერვალი.



const messages = [
"Hello!",
"How are you?",
"Welcome!"
];

let index = 0;
let cycle = 0;

let interval = setInterval(() => {
console.log(messages[index]);
index++;

if (index === messages.length) {
    index = 0;
    cycle++;
}

if (cycle === 4) {
    clearInterval(interval);
    console.log("Interval stopped.");
}
}, 2000);
