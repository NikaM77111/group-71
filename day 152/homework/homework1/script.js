class BankAccount {
    constructor(name, surname, balance = 0) {
        this.name = name;
        this.surname = surname;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount >= 0) {
            this.balance += amount;
        } else {
            return "Enter a valid deposit amount";
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            return "Not enough balance or invalid amount";
        }
    }
    get checkbalance() {
        return this.balance;
    }
}

const user1 = new BankAccount("Nika", "Machavariani");

const depositInput = document.getElementById("deposit");
const withdrawInput = document.getElementById("withdraw");
const balanceText = document.getElementById("balanceText");
const errorText = document.getElementById("errorText");
const button = document.getElementById("submitBtn");

button.addEventListener("click", () => {
    let depositAmount = Number(depositInput.value);
    let withdrawAmount = Number(withdrawInput.value);

    errorText.textContent = "";

    if (depositAmount) {
        let error = user1.deposit(depositAmount);
        if (error != null) {
    errorText.textContent = error;
}
    }

    if (withdrawAmount) {
        let error = user1.withdraw(withdrawAmount);
        if (error != null) {
    errorText.textContent = error;
}
}

    balanceText.textContent = `Your balance is ${user1.checkbalance}`;

    depositInput.value = "";
    withdrawInput.value = "";
});
