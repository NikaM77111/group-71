const form = document.getElementById("registerForm");
const message = document.getElementById("message");
const userData = document.getElementById("userData");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let userExists = false;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const savedUser = JSON.parse(localStorage.getItem(key));
        if ( savedUser.name === name && savedUser.surname === surname && savedUser.email === email && savedUser.password === password) {
            userExists = true;
        }
    }

    if (userExists) {
        message.textContent = "მსგავსი მომხმარებელი უკვე დარეგისტრირებულია";
        return;
    }

    const newUser = {
        name,
        surname,
        email,
        password
    };

    const id = Date.now();

    localStorage.setItem(id, JSON.stringify(newUser));

    message.textContent = "";


userData.innerHTML = `
    <p><b>Name:</b> ${name}</p>
    <p><b>Surname:</b> ${surname}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Password:</b> ${password}</p>
`;

    form.reset();
});