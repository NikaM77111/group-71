// 2) შექმენი ერთი global ცვლადი და ერთი local ცვლადი ფუნქციაში.
// დაბეჭდე ორივე და ნახე რომელი იმუშავებს.

let name = "saba"

console.log(name)



function numbers() {
    let a = 5;
    console.log("number is:", a)
}

numbers();
console.log(a);

// შედეგი იქნება შეცდომა error,
// რადგან ა არის ლოგიკური ცვლადი და არსებობს მხოლოდ numbers() ფუნცქიის შიგნით
// ფუნქციის გარეთ პროგრამა ვერ ხედავს ამ ცვლადს.