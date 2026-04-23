// შექმენით კლასი სახელწოდებით BankAccount. გადაეცით კუთვნილებები: name, surname, balance.
// balance - default-ად ყველა user-ს ჰქონდეს 0.
// კლასში დაამატეთ მეთოდები: deposit, withdraw.
// deposit - ამ მეთოდის საშუალებით მომხმარებელმა უნდა შემოიტანოს ბალანსზე თანხა (ბალანსი უნდა განახლდეს).
// withdraw - ამ მეთოდის საშუალებით მომხმარებელმა უნდა გაიტანოს ბალანსსიდან თანხა (ბალანსი უნდა განახლდეს).

// შექმენით getter, რომელიც დააბრუნებს მომხმარებლის balance კუთვნილებას. (checkBalance)

class BankAccount{
    constructor(name, surname, balance = 0){
        this.name = name,
        this.surname = surname,
        this.balance = balance
    } 
    deposit(amount){
        if(amount >= 0){
            this.balance += amount 
        } else {
            console.log("enter a correct amount: ")
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount
        } else {
            console.log("not enough balance or invalid amount")
        }
    }
    get checkbalance(){
        return this.balance;
    }
}


const user1 = new BankAccount("Nika", "Machavariani");

user1.deposit(100);
user1.withdraw(40);

console.log(user1.checkbalance);
