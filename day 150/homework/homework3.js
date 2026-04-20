// 3) მოცემულია მასივი colors. დესტრუქტურიზაციის გამოყენებით პირველი ორი ფერი შეინახეთ ცვლადებში first და second,
//  ხოლო დანარჩენი ფერები მოათავსეთ ახალ მასივში სახელად others (გამოიყენეთ Rest ოპერატორი).



const colors = ["red", "blue", "green", "yellow", "purple"];

//...others ==> rest operator
const [first, second, ...others] = colors;

console.log(first);   
console.log(second);  
console.log(others);  
