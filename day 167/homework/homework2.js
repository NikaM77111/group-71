//2) შექმენი 4 პრომისი, თითოეული ჩასვი setTimeOut-ში და  დააბრუნე მათგან რომელი გაეშვება ყველაზე სწრაფად.

const promise1 = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve("Promise 1");
}, 3000);
});

const promise2 = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve("Promise 2");
}, 1000);
});

const promise3 = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve("Promise 3");
}, 2000);
});

const promise4 = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve("Promise 4");
}, 4000);
});


Promise.race([promise1, promise2, promise3, promise4])
.then((result) => {
    console.log("Fastest Promise is:", result);
});