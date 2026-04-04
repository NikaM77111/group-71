function validateForm() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;


    if (name.length <= 1) {
        alert("სახელი უნდა იყოს 1 სიმბოლოზე მეტი");
        return false; 
    }

    if (password.length < 8) {
        alert("პაროლი უნდა აღემატებოდეს 8 სიმბოლოს");
        return false; 
    }


    if (age < 10) {
        alert("ასაკი უნდა იყოს 10-ზე მეტი");
        return false; 
    }

    return true;
}