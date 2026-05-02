const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    //let users = localStorage.getItem("users");

    let isDuplicate = false;

    for(let i = 0; i<this.localStorage.length; i++){
        let key = localStorage.key(i)
        let user = JSON.parse(localStorage.getItem(key))

        if(user.name === name && user.surname === surname && user.email === email && user.password === password)
        {
            isDuplicate = true;
            break;
        }
    }
    if(isDuplicate){
        result.innerHTML = "same user is already regiistered on website";
        return;
    }

    let saveddata = {
        name,
        surname,
        email,
        password,
    }

    localStorage.setItem(Date.now(), JSON.stringify(saveddata));

    result.innerHTML = "";

    for (let i = 0; i < users.length; i++) {
        result.innerHTML +=
            "Name: " + users[i].name + "<br>" +
            "Surname: " + users[i].surname + "<br>" +
            "Email: " + users[i].email + "<br>" +
            "Password: " + users[i].password + "<br><br>";
}
});
