// დაწერეთ while loop პროგრამა: შეეკითხეთ მომხმარებელს პაროლი, იქამდე სანამ არ შემოიტანს სწორ მნიშვნელობას.

let password = "123";
let userInput = " ";


while (userInput !== password) {
    userInput = prompt("enter a password");
}