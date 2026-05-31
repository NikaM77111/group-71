const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribe-btn");
const dismissBtn = document.getElementById("dismiss-btn");

const errorMsg = document.getElementById("error-msg");
const signupCard = document.getElementById("signup-card");
const successCard = document.getElementById("success-card");
const userEmail = document.getElementById("user-email");


function validEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}

subscribeBtn.addEventListener("click", function () {
    const email = emailInput.value;

    if (validEmail(email) == true) {
        errorMsg.textContent = "";
        userEmail.textContent = email;
        signupCard.style.display = "none";
        successCard.style.display = "block";
    } else {
        errorMsg.textContent = "Valid email required";
    }
});

dismissBtn.addEventListener("click", function () {
    successCard.style.display = "none";
    signupCard.style.display = "flex";
    emailInput.value = "";
    errorMsg.textContent = "";
});