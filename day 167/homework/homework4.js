//4) შექმენი 5 Promise და გაფილტრე ეს ფრომისები დააბრუნე  მხოლოდ წარმატებულები (resolved/fulfilled)


const promise1 = Promise.resolve("Success 1");
const promise2 = Promise.reject("Error 1");
const promise3 = Promise.resolve("Success 2");
const promise4 = Promise.resolve("Success 3");
const promise5 = Promise.reject("Error 2");

Promise.allSettled([promise1, promise2, promise3, promise4, promise5])
    .then((results) => {

    const successfulPromises = results.filter((result) => {
    return result.status === "fulfilled";
});

    console.log(successfulPromises);
});