//2) შექმენი 5 Promise და გაფილტრე ეს ფრომისები დააბრუნე  მხოლოდ წარუმატებლები (rejected). (მინიშნება: გამოგადგებათ filter() 


const promises = [
Promise.resolve("Success 1"),
Promise.reject("Error 2"),
Promise.resolve("Success 3"),
Promise.reject("Error 4"),
Promise.reject("Error 5")
];

Promise.allSettled(promises)
.then(results => {
    const rejected = results.filter(
        result => result === "rejected"
    );

    console.log(rejected);
});