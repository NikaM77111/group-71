//1) შექენი 4 Promise (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error 1"), 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success 2"), 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success 3"), 500);
});

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error 4"), 1500);
});

Promise.any([p1, p2, p3, p4])
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })