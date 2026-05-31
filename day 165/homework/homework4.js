//4) შექმენით მინიმუმ 5 promise - ი და Promise.all - ის მეშვეობით დაამუშავეთ ყველა მათგანი ერთდროულად და გამოიტანეთ შედეგები ტერმინალში.

const promise1 = Promise.resolve("Result 1");
const promise2 = Promise.resolve("Result 2");
const promise3 = Promise.resolve("Result 3");
const promise4 = new Promise((resolve) => {
setTimeout(() => {
    resolve("Result 4");
}, 1000);
});

const promise5 = new Promise((resolve) => {
setTimeout(() => {
    resolve("Result 5");
}, 2000);
});

Promise.all([
promise1,
promise2,
promise3,
promise4,
promise5
])
.then((results) => {
    console.log("All results:", results);
})
.catch((error) => {
    console.error("Error:", error);
});