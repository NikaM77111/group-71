const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;

    let isDuplicate = false;

    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));
        if(user.name === name && user.surname === surname && user.email === email){
            isDuplicate = true;
            break;
    }
}

    if(isDuplicate){
        result.innerHTML = "user already exists";
        return;
    }

    let saveddata = {
        name,
        surname,
        email
    };

    let id = Date.now();

    localStorage.setItem(id, JSON.stringify(saveddata));

    result.innerHTML = "saved";

    form.reset();
});
