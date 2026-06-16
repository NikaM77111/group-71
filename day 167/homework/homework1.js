//1) შექმენი ორი Promise  (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და
//ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად დამუშავებისთვის Allsetteld გამოიყენე.

const promise1 = new Promise((resolve, reject) => {
resolve("Success!");
});

const promise2 = new Promise((resolve, reject) => {
reject("Error!");
});


promise1
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

promise2
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


Promise.allSettled([promise1, promise2])
.then((results) => {
    console.log(results);
});