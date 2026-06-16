//3)შექმენი 4 ფრომისი  და reduce-ით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი.


const promise1 = Promise.resolve("Success 1");
const promise2 = Promise.reject("Error 1");
const promise3 = Promise.resolve("Success 2");
const promise4 = Promise.reject("Error 2");

Promise.allSettled([promise1, promise2, promise3, promise4])
    .then((results) => {

const count = results.reduce(
    (acc, result) => {
    if (result.status === "fulfilled") {
        acc.success++;
    } else {
        acc.failed++;
    }

    return acc;
    },
    { success: 0, failed: 0 }
);

console.log("succesfull:", count.success);
console.log("unsuccesfull:", count.failed);
});