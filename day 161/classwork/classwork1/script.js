const form = document.getElementById("form")
const email = document.getElementById("email")
const error = document.getElementById("error")

const main = document.getElementById("main")
const succes = document.getElementById("succes")
const mail = document.getElementById("mail")

form.onsubmit() = e => {
    e.preventDefault()

    if(!email.value.includes("@")){
        error.style.display = "block"
        email.style.border = "1px solid red"
        return
    }

    mail.innerText = email.value

    main.classListadd("hide")
    succes.classListadd("hide")
}

function dismiss(){
    succes.classList.add("hide")
    main.classList.remove("hide")
}