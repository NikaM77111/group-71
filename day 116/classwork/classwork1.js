// დაწერეთ საშინაო დავალებაში მოცემული სავარჯიშო (რაც დღეს გავარჩიეთ), თუმცა ეს პროგრამა უნდა იყოს case-insensitive
//მომხმარებელს შემოატანინეთ prompt() ის საშუალებით პაროლი. დაწერეთ while loop პროგრამა: იქამდე გამოიტანოს
//  'wrong passsword, try again' სანამ პაროლი არ დაემთხვევა 'admin123'-ს. ამ შემთხვევაში გამოიტანეთ 'Access Granted' და გაწყვიტეთ ციკლი.

let passsword;

while (true) {
    passsword = prompt("Enter Password:");

if (passsword.toLowerCase() === "admin123") {
    console.log("Acces Granted")
    break;
} else {
    console.log("wrong passsword, try again")
}
}