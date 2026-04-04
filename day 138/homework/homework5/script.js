function validateAge() {
    var age = document.getElementById("age").value;


    if (age === "") {
        alert("გთხოვთ, შეიყვანოთ ასაკი!");
        return false;
    }

    if (age * 1 !== age) {
        alert("გთხოვთ, შეიყვანოთ რიცხვი!");
        return false;
    }

    return true;
}