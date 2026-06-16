// 1) შექმენით თქვენი ხელოვნური Promise და გადაეცით callback ფუნქცია resolve და reject პარამეტრით, 
// ფუნქციის შიგნით გამოიყენეთ setTimeout - ი იმისთვის რომ შეაყოვნოთ კოდი, ასევე შექმენით success 
// ცვლადი რისი დახმარებითაც თქვენ მიიღებთ გადაწყვეტილებას რომელი სიტუაცია გაუშვათ resolve თუ reject, 
// შემდგომ ფუნქციის გარეთ დაელოდეთ promise - ის შესრულებას .then და .catch ფუნქციის დახმარებით

const myPromise = new Promise((resolve, reject) => {
    const succes = true

    setTimeout(() => {
        if(succes) {
            resolve("registered succesfully")
        } else {
            reject("error")
        }
    }, 2000)
});

myPromise
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })