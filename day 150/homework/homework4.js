// 4) შექმენით ორი მასივი: fruits1, fruits2. შექმენით მესამე მასივი allFruits, რომელიც შეიცავს ორივე მასივის 
// ელემენტებს Spread ოპერატორის გამოყენებით.

fruits1 = ["apple","banana","peach","pear","cherrys"]
fruits2 = ["apple","kiwi","ananas"]

const allFruits = [...fruits1, ...fruits2];

console.log(allFruits);