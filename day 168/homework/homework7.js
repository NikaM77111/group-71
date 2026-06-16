// 7) ამოიღე ინფორმაცია კონკრეტულ მომხმარებელზე და მის პოსტებზე ერთდროულად. Promise.all- ის გამოყენებით
//  დაელოდე ორივე request-ის დასრულებას და მხოლოდ ამის შემდეგ დაბეჭდე შედეგი.
// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts?userId=1



Promise.all([
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json()),

fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then(response => response.json())
])
.then(([user, posts]) => {
console.log("მომხმარებელი:");
console.log(user);

console.log("პოსტები:");
console.log(posts);
})
.catch(error => {
console.log("შეცდომა:", error);
});